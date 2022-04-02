import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteRobot, useRobot } from "../robots.api";
import { randomGreeting, randomPrefix } from "./Robot.helpers";
import * as S from "./Robot.styles";

export default function Robot() {
  const params = useParams();
  const navigate = useNavigate();

  const { data: robot } = useRobot(params.guid);

  function handleDelete(guid: string): void {
    deleteRobot(guid); // TODO: Success, loading, error states
    navigate("/");
  }

  if (!params.guid || !robot) {
    return <S.NotFound>Nothing to see here!</S.NotFound>;
  }

  try {
    return (
      <S.Container>
        <S.Header>
          <S.Avatar src={robot.avatarUrl} alt={`Avatar of ${robot.name}`} />
        </S.Header>

        <S.Body>
          <S.Greeting>{randomGreeting()}</S.Greeting>
          <S.Name>
            My name is <S.GradientText>{robot.name}</S.GradientText>
          </S.Name>
          <S.Purpose>
            {randomPrefix()} <S.GradientText>{robot.purpose}</S.GradientText>
          </S.Purpose>

          <S.Actions>
            <S.Delete onClick={() => handleDelete(robot.guid)}>
              Delete bot
            </S.Delete>
            <S.Edit onClick={() => navigate(`/edit/${robot.guid}`)}>
              Edit bot
            </S.Edit>
          </S.Actions>
        </S.Body>
      </S.Container>
    );
  } catch {
    return (
      <S.NotFound>We can't find the droid you're looking for :(</S.NotFound>
    );
  }
}
