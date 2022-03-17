import { IRobot } from "../robots.models";
import * as yup from "yup";

export type SaveRobotFormData = {
  name: string;
  purpose: string;
};

export const schema = yup.object().shape({
  name: yup.string().trim().required("You must give your robot a name"),
  purpose: yup.string().trim().required("Please give a purpose for your robot"),
});

export function getDefaultFormValues(robot?: IRobot): SaveRobotFormData {
  return {
    name: robot?.name ?? "",
    purpose: robot?.purpose ?? "",
  };
}
