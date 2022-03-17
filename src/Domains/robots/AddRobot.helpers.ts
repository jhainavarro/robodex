import * as yup from "yup";

export type AddRobotFormData = {
  name: string;
  purpose: string;
};

export const schema = yup.object().shape({
  name: yup.string().trim().required("You must give your robot a name"),
  purpose: yup.string().trim().required("Please give a purpose for your robot"),
});

export function getDefaultFormValues(): AddRobotFormData {
  return {
    name: "",
    purpose: "",
  };
}
