import React from "react";
import * as S from "./Home.styles";

export default function Home() {
  return (
    <>
      <S.Title>Hi there!</S.Title>
      <S.Subtitle>What do you want to do today?</S.Subtitle>

      <S.Actions>
        <S.LinkButton to="/robots">View robots</S.LinkButton>
      </S.Actions>
    </>
  );
}
