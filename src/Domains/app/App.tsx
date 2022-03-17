import React from "react";
import { Outlet } from "react-router-dom";
import logo from "Shared/icons/logo.svg";
import * as S from "./App.styles";

export default function App() {
  return (
    <S.App>
      <S.Header>
        <S.Logo src={logo} alt="Robodex logo" />
        <S.LogoName>Robodex</S.LogoName>
      </S.Header>

      <S.Content>
        <Outlet />
      </S.Content>
    </S.App>
  );
}
