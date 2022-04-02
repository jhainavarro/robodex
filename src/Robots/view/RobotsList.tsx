import React from "react";
import { Link } from "react-router-dom";
import { fetchRobots } from "../robots.api";
import { Robot } from "../robots.models";
import * as S from "./RobotsList.styles";

export default function RobotsList() {
  const robots: Robot[] = fetchRobots();

  if (robots.length > 0) {
    return (
      <S.Catalog>
        {robots.map((robot) => (
          <S.Card key={robot.guid}>
            <Link to={`/${robot.guid}`}>
              <S.CardHeader>
                <S.Avatar
                  src={robot.avatarUrl}
                  alt={`Avatar of ${robot.name}`}
                />
              </S.CardHeader>
              <S.Name>{robot.name}</S.Name>
            </Link>
          </S.Card>
        ))}
      </S.Catalog>
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
