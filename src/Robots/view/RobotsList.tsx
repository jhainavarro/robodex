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

  return (
    <S.Empty>
      <S.EmptyImg src="https://robohash.org/empty" alt="No robots yet" />
      <S.EmptyText>No robots yet.</S.EmptyText>
      <S.AddLink to="/add">Add one now!</S.AddLink>
    </S.Empty>
  );
}
