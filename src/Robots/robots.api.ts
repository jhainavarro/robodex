import env from "env-var";
import { useMutation, useQuery, UseQueryResult } from "react-query";
import { AddRobotInput, EditRobotInput, Robot } from "./robots.models";

export const ROBOTS_KEY = "robots";

const ROBOTS_API = env.get("REACT_APP_ROBOTS_API").required().asString();

export function fetchRobots(): Robot[] {
  const stored = window.localStorage.getItem(ROBOTS_KEY);
  let robots: Robot[] = [];

  if (stored) {
    robots = JSON.parse(stored) as Robot[]; // FIXME: Proper typing and transformation
  }

  return robots;
}

/**
 * @returns A list of robots from the Robodex
 */
export function useRobots(): UseQueryResult<Robot[]> {
  // TODO: Replace `fetchRobots()` with this
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

export function deleteRobot(guid: string): void {
  const list = fetchRobots();
  const filtered = list.filter((robot) => robot.guid !== guid);

  window.localStorage.setItem(ROBOTS_KEY, JSON.stringify(filtered));
}
