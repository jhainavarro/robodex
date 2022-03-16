import React from "react";
import logo from "Shared/icons/logo.svg";
import * as S from "./App.styles";

function App() {
  return (
    <S.App>
      <S.Header>
        <S.Logo src={logo} alt="Robodex logo" />
        <S.HeaderText>Robodex</S.HeaderText>
      </S.Header>
    </S.App>
  );
}

export default App;
