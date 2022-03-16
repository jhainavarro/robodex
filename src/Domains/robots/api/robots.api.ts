import { IRobot } from "../models/robot.models";

// TODO: Get from persisted data layer
export function fetchRobots(): IRobot[] {
  return [
    {
      guid: "851707a5-91a5-48bb-8c54-b8f3cf8ea194",
      name: "Android 18",
      purpose: "Destroy the world",
    },
    {
      guid: "51f2f840-2cb3-4dde-9a8a-dc656a2e1573",
      name: "Cyber Botchi",
      purpose: "Eat all the bolts!",
    },
    {
      guid: "84ecd48b-043d-40c5-b91d-c37a0e01c66a",
      name: "Megatron",
      purpose: "Take over the universe",
    },
    {
      guid: "5016eee7-e26d-4bb3-83f1-5d382ac50525",
      name: "Kuppa Joe",
      purpose: "Make the most excellent coffee",
    },
    {
      guid: "7f38350e-6d3b-4f81-878a-36b7e4f0d79a",
      name: "Robo Wraith",
      purpose: "Now you see me, now you don't",
    },
  ];
}

// TODO: Get from persisted data layer
export function fetchRobot(guid: string): IRobot {
  const robot = fetchRobots().find((robot) => robot.guid === guid);

  if (!robot) {
    throw new Error(`Unable to find robot with guid: ${guid}`);
  }

  return robot;
}
