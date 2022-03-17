import { IRobot } from "../models/robot.models";

// TODO: Get from persisted data layer
export function fetchRobots(): IRobot[] {
  const stored = window.localStorage.getItem("robots");
  let robots: IRobot[] = [];

  if (stored) {
    robots = JSON.parse(stored) as IRobot[]; // FIXME: Proper typing and transformation
  }

  return robots;
}

// TODO: Get from persisted data layer
export function fetchRobot(guid: string): IRobot {
  const robot = fetchRobots().find((robot) => robot.guid === guid);

  if (!robot) {
    throw new Error(`Unable to find robot with guid: ${guid}`);
  }

  return robot;
}
