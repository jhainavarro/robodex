import React from "react";
import { useParams } from "react-router-dom";
import { useRobot } from "../robots.api";
import SaveRobot from "./SaveRobot";

export default function EditRobot() {
  const params = useParams();
  const { data: robot } = useRobot(params.guid);

  return robot ? (
    <SaveRobot robot={robot} />
  ) : (
    <i>We can't find the droid you're looking for :(</i>
  );
}
