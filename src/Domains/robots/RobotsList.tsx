import React from "react";
import { Outlet, useMatch } from "react-router-dom";
import { fetchRobots } from "./api/robots.api";
import { IRobot } from "./models/robot.models";
import * as S from "./RobotsList.styles";

export default function RobotsList() {
  const robots: IRobot[] = fetchRobots();
  const isViewingARobot = useMatch("/:guid");

  if (isViewingARobot) {
    return (
      <>
        <S.Back to="/">⬅ Back to list</S.Back>
        <Outlet />
      </>
    );
  }

  if (robots.length > 0) {
    return (
      <>
        {robots.map((robot) => (
          <React.Fragment key={robot.guid}>
            <S.Name to={`/${robot.guid}`}>{robot.name}</S.Name>
          </React.Fragment>
        ))}

        <S.AddButton to="/add">+ Add another robot</S.AddButton>
      </>
    );
  }

  // TODO: Button to add a robot
  return (
    <S.EmptyText>
      No robots yet. Would you like to
      <S.AddLink to="/add">add one</S.AddLink>?
    </S.EmptyText>
  );
}
