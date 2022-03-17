import React from "react";
import { fetchRobots } from "../robots.api";
import { IRobot } from "../robots.models";
import * as S from "./RobotsList.styles";

export default function RobotsList() {
  const robots: IRobot[] = fetchRobots();

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
