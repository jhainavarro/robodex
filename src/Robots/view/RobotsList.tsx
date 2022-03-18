import React from "react";
import { fetchRobots } from "../robots.api";
import { IRobot } from "../robots.models";
import * as S from "./RobotsList.styles";

export default function RobotsList() {
  const robots: IRobot[] = fetchRobots();

  if (robots.length > 0) {
    return (
      <>
        <S.Catalog>
          {robots.map((robot) => (
            <S.Card key={robot.guid} to={`/${robot.guid}`}>
              <S.CardHeader>
                <S.Avatar
                  src={robot.avatarUrl}
                  alt={`Avatar of ${robot.name}`}
                />
              </S.CardHeader>
              <S.Name>{robot.name}</S.Name>
            </S.Card>
          ))}
        </S.Catalog>

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
