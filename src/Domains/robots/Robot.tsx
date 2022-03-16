import React from "react";
import { useParams } from "react-router-dom";
import { fetchRobot } from "./api/robots.api";
import * as S from "./Robot.styles";

export default function Robot() {
  const params = useParams();

  if (!params.guid) {
    return <S.NotFound>Nothing to see here!</S.NotFound>;
  }

  try {
    const robot = fetchRobot(params.guid);

    return (
      <S.Container>
        <S.Name>Hi! My name is {robot.name}</S.Name>
        <S.Purpose>And I am built to {robot.purpose}</S.Purpose>
      </S.Container>
    );
  } catch {
    return (
      <S.NotFound>We can't find the droid you're looking for :(</S.NotFound>
    );
  }
}
