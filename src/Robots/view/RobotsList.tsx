import React from "react";
import { Link } from "react-router-dom";
import { useRobots } from "../robots.api";
import * as S from "./RobotsList.styles";

export default function RobotsList() {
  const { data: robots, isLoading, isError } = useRobots();

  // FIXME: Design + test
  if (isLoading || !robots) {
    return <p>Loading...</p>;
  }

  // FIXME: Design + test
  if (isError) {
    return <p>Oops! Something happened. Please refresh the page.</p>;
  }

  return robots.length ? (
    <S.Catalog>
      {robots.map((robot) => (
        <S.Card key={robot.guid}>
          <Link to={`/${robot.guid}`}>
            <S.CardHeader>
              <S.Avatar src={robot.avatarUrl} alt={`Avatar of ${robot.name}`} />
            </S.CardHeader>
            <S.Name>{robot.name}</S.Name>
          </Link>
        </S.Card>
      ))}
    </S.Catalog>
  ) : (
    <S.Empty>
      <S.EmptyImg src="https://robohash.org/empty" alt="No robots yet" />
      <S.EmptyText>No robots yet.</S.EmptyText>
      <S.AddLink to="/add">Add one now!</S.AddLink>
    </S.Empty>
  );
}
