import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteRobot, fetchRobot } from "../robots.api";
import * as S from "./Robot.styles";

export default function Robot() {
  const params = useParams();
  const navigate = useNavigate();

  function handleDelete(guid: string): void {
    deleteRobot(guid); // TODO: Success, loading, error states
    navigate("/");
  }

  if (!params.guid) {
    return <S.NotFound>Nothing to see here!</S.NotFound>;
  }

  try {
    const robot = fetchRobot(params.guid);

    return (
      <S.Container>
        <S.Avatar src={robot.avatarUrl} alt={`Avatar of ${robot.name}`} />
        <S.Name>Hi! My name is {robot.name}</S.Name>
        <S.Purpose>And I am built to {robot.purpose}</S.Purpose>

        <S.Edit to={`/edit/${robot.guid}`}>Edit bot</S.Edit>

        {/* TODO: Confirmation */}
        <S.Delete onClick={() => handleDelete(robot.guid)}>Delete bot</S.Delete>
      </S.Container>
    );
  } catch {
    return (
      <S.NotFound>We can't find the droid you're looking for :(</S.NotFound>
    );
  }
}
