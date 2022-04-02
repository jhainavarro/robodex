import env from "env-var";
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import { AddRobotInput, EditRobotInput, Robot } from "./robots.models";

export const ROBOTS_KEY = "robots";

const ROBOTS_API = env.get("REACT_APP_ROBOTS_API").required().asString();

/**
 * Gets the list of robots from the Robodex
 */
export function useRobots(): UseQueryResult<Robot[]> {
  const getRobots = async () => {
    const response = await fetch(`${ROBOTS_API}/robots`);
    return (await response.json()) as Robot[]; // FIXME: Typing
  };

  return useQuery(ROBOTS_KEY, () => getRobots());
}

/**
 * Gets a single robot from the Robodex
 */
export function useRobot(guid: string = ""): UseQueryResult<Robot | undefined> {
  const getRobot = async (guid: string) => {
    const response = await fetch(`${ROBOTS_API}/robots/${guid}`);
    return (await response.json()) as Robot[]; // FIXME: Typing
  };

  return useQuery([ROBOTS_KEY, guid], () => getRobot(guid));
}

/**
 * Creates or edits a robot in the Robodex
 */
export function useSaveRobot() {
  const add = async (robot: AddRobotInput) => {
    const response = await fetch(`${ROBOTS_API}/robots`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(robot),
    });

    return (await response.json()) as Robot; // FIXME: Typing
  };

  const edit = async (robot: EditRobotInput) => {
    const response = await fetch(`${ROBOTS_API}/robots/${robot.guid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(robot),
    });

    return (await response.json()) as Robot; // FIXME: Typing
  };

  return useMutation((robot: AddRobotInput | EditRobotInput) =>
    "guid" in robot ? edit(robot) : add(robot)
  );
}

/**
 * Removes a robot from the Robodex
 */
export function useDeleteRobot() {
  const queryClient = useQueryClient();

  const remove = (guid: string) => {
    return fetch(`${ROBOTS_API}/robots/${guid}`, {
      method: "DELETE",
    });
  };

  return useMutation((guid: string) => remove(guid), {
    onSuccess(_, guid) {
      queryClient.removeQueries([ROBOTS_KEY, guid]);
      queryClient.setQueryData(ROBOTS_KEY, (list: Robot[] = []) =>
        list.filter((robot) => robot.guid !== guid)
      );
    },
  });
}
