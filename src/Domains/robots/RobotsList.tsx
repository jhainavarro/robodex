import React from "react";
import { Outlet, useMatch } from "react-router-dom";
import { fetchRobots } from "./api/robots.api";
import { IRobot } from "./models/robot.models";
import * as S from "./RobotsList.styles";

export default function RobotsList() {
  const robots: IRobot[] = fetchRobots();
  const match = useMatch("/robots/:guid");

  // We are viewing a robot
  if (match) {
    return (
      <>
        <S.Back to="/robots">⬅ Back to list</S.Back>
        <Outlet />
      </>
    );
  }

  if (robots.length > 0) {
    return (
      <>
        {robots.map((robot) => (
          <React.Fragment key={robot.guid}>
            <S.Name to={`/robots/${robot.guid}`}>{robot.name}</S.Name>
          </React.Fragment>
        ))}
      </>
    );
  }

  // TODO: Button to add a robot
  return <S.EmptyText>No robots yet. Would you like to add one?</S.EmptyText>;
}
