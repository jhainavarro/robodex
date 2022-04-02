import { Robot } from "./robots.models";

export const ROBOTS_KEY = "robots";

export function fetchRobots(): Robot[] {
  const stored = window.localStorage.getItem(ROBOTS_KEY);
  let robots: Robot[] = [];

  if (stored) {
    robots = JSON.parse(stored) as Robot[]; // FIXME: Proper typing and transformation
  }

  return robots;
}

export function fetchRobot(guid: string): Robot {
  const robot = fetchRobots().find((robot) => robot.guid === guid);

  if (!robot) {
    throw new Error(`Unable to find robot with guid: ${guid}`);
  }

  return robot;
}

// Used the base `Robot` interface for simplicity
// If we want to be more flexible, we can consider
// enumerating the fields we want to accept as input
type AddRobotInput = Omit<Robot, "guid">;

export function addRobot(robot: AddRobotInput): Robot {
  const list = fetchRobots();
  const newRobot = {
    guid: `${Date.now()}`,
    ...robot,
  };

  list.push(newRobot);
  window.localStorage.setItem(ROBOTS_KEY, JSON.stringify(list));

  return newRobot;
}

type EditRobotInput = Robot;

export function editRobot(robot: EditRobotInput): Robot {
  const list = fetchRobots();
  const index = list.findIndex((r) => r.guid === robot.guid);

  if (index === -1) {
    throw new Error(`Unable to edit robot with guid: ${robot.guid}`);
  }

  list[index] = robot;
  window.localStorage.setItem(ROBOTS_KEY, JSON.stringify(list));

  return robot;
}

export function saveRobot(robot: AddRobotInput | EditRobotInput): Robot {
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
