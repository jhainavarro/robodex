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
  async function getRobots() {
    const response = await fetch(`${ROBOTS_API}/robots`);
    return (await response.json()) as Robot[];
  }

  return useQuery(ROBOTS_KEY, () => getRobots());
}

/**
 * Gets a single robot from the Robodex
 */
export function useRobot(guid: string = ""): UseQueryResult<Robot | undefined> {
  async function getRobot(guid: string) {
    const response = await fetch(`${ROBOTS_API}/robots/${guid}`);
    return (await response.json()) as Robot[];
  }

  return useQuery([ROBOTS_KEY, guid], () => getRobot(guid));
}

/**
 * Creates or edits a robot in the Robodex
 */
export function useSaveRobot() {
  async function addRobot(robot: AddRobotInput) {
    const response = await fetch(`${ROBOTS_API}/robots`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(robot),
    });

    return (await response.json()) as Robot;
  }

  async function editRobot(robot: EditRobotInput) {
    const response = await fetch(`${ROBOTS_API}/robots/${robot.guid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(robot),
    });

    return (await response.json()) as Robot;
  }

  return useMutation((robot: AddRobotInput | EditRobotInput) =>
    "guid" in robot ? editRobot(robot) : addRobot(robot)
  );
}

/**
 * Removes a robot from the Robodex
 */
export function useDeleteRobot() {
  const queryClient = useQueryClient();

  function deleteRobot(guid: string) {
    return fetch(`${ROBOTS_API}/robots/${guid}`, {
      method: "DELETE",
    });
  }

  return useMutation((guid: string) => deleteRobot(guid), {
    onSuccess(_, guid) {
      queryClient.removeQueries([ROBOTS_KEY, guid]);
      queryClient.setQueryData(ROBOTS_KEY, (list: Robot[] = []) =>
        list.filter((robot) => robot.guid !== guid)
      );
    },
  });
}
