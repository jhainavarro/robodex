import { Robot } from "../robots.models";
import * as yup from "yup";

export type SaveRobotFormData = {
  name: string;
  purpose: string;
  avatarUrl: string;
};

export const schema = yup.object().shape({
  name: yup.string().trim().required("You must give your robot a name"),
  purpose: yup.string().trim().required("Please give a purpose for your robot"),
});

export function getDefaultFormValues(robot?: Robot): SaveRobotFormData {
  return {
    name: robot?.name ?? "",
    purpose: robot?.purpose ?? "",
    avatarUrl: robot?.avatarUrl ?? getRandomAvatar(),
  };
}

export function getRandomAvatar(seed?: string): string {
  return `https://robohash.org/${seed ?? Date.now()}`;
}
