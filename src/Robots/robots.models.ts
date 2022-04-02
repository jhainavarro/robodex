export interface Robot {
  guid: string;
  name: string;
  purpose: string;
  avatarUrl: string;
}

// Used the base `Robot` interface for simplicity
// If we want to be more flexible, we can consider
// enumerating the fields we want to accept as input
export type AddRobotInput = Omit<Robot, "guid">;

export type EditRobotInput = Robot;
