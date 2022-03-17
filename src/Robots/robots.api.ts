import { IRobot } from "./robots.models";

export const ROBOTS_KEY = "robots";

export function fetchRobots(): IRobot[] {
  const stored = window.localStorage.getItem(ROBOTS_KEY);
  let robots: IRobot[] = [];

  if (stored) {
    robots = JSON.parse(stored) as IRobot[]; // FIXME: Proper typing and transformation
  }

  return robots;
}

export function fetchRobot(guid: string): IRobot {
  const robot = fetchRobots().find((robot) => robot.guid === guid);

  if (!robot) {
    throw new Error(`Unable to find robot with guid: ${guid}`);
  }

  return robot;
}

// Used the base `IRobot` interface for simplicity
// If we want to be more flexible, we can consider
// enumerating the fields we want to accept as input
type AddRobotInput = Omit<IRobot, "guid">;

export function addRobot(robot: AddRobotInput): IRobot {
  const list = fetchRobots();
  const newRobot = {
    guid: `${Date.now()}`,
    ...robot,
  };

  list.push(newRobot);
  window.localStorage.setItem(ROBOTS_KEY, JSON.stringify(list));

  return newRobot;
}

type EditRobotInput = IRobot;

export function editRobot(robot: EditRobotInput): IRobot {
  const list = fetchRobots();
  const index = list.findIndex((r) => r.guid === robot.guid);

  if (index === -1) {
    throw new Error(`Unable to edit robot with guid: ${robot.guid}`);
  }

  list[index] = robot;
  window.localStorage.setItem(ROBOTS_KEY, JSON.stringify(list));

  return robot;
}

export function saveRobot(robot: AddRobotInput | EditRobotInput): IRobot {
  if ("guid" in robot) {
    return editRobot(robot);
  }

  return addRobot(robot);
}

export function deleteRobot(guid: string): void {
  const list = fetchRobots();
  const filtered = list.filter((robot) => robot.guid !== guid);

  window.localStorage.setItem(ROBOTS_KEY, JSON.stringify(filtered));
}
