import React from "react";
import { Outlet } from "react-router-dom";
import logo from "Shared/icons/logo.svg";
import * as S from "./App.styles";

export default function App() {
  return (
    <S.App>
      <S.Sidebar>
        <S.Logo src={logo} alt="Robodex logo" />
        <S.LogoName>Robodex</S.LogoName>

        <S.Nav>
          <S.Link to="/">Home</S.Link>
          <S.Link to="/robots">Robots</S.Link>
        </S.Nav>
      </S.Sidebar>

      <S.Content>
        <Outlet />
      </S.Content>
    </S.App>
  );
}
