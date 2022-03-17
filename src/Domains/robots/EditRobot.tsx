import React from "react";
import { useParams } from "react-router-dom";
import SaveRobot from "./SaveRobot";
import { fetchRobot } from "./api/robots.api";

export default function EditRobot() {
  const params = useParams();

  try {
    const robot = fetchRobot(params.guid ?? "");

    return <SaveRobot robot={robot} />;
  } catch {
    return <i>We can't find the droid you're looking for :(</i>;
  }
}
