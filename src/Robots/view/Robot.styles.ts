import { text } from "Shared/components/utils/mixins";
import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";
import Button from "Shared/components/button";
import Card from "Shared/components/card";

export const Container = styled(Card)`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  height: 150px;
`;

export const Greeting = styled.p`
  margin: 32px 0 24px;
  ${text("medium", 500, COLORS.TEXT)};
`;

export const Name = styled.p`
  ${text("large", 600, COLORS.TEXT)};
`;

export const Purpose = styled.p`
  margin: 20px 0;

  ${text("medium", 500, COLORS.TEXT)};
`;

export const GradientText = styled.span`
  background: linear-gradient(90deg, #9c5ac8, #168ebc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
`;

export const Edit = styled(Button)``;

export const Delete = styled(Button).attrs(() => ({
  bgColor: "transparent",
  textColor: COLORS.GRAY,
}))``;

export const NotFound = styled.p`
  font-style: italic;
`;
