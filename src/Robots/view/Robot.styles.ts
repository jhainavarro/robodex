import { gradientText, text } from "Shared/components/utils/mixins";
import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";
import Button from "Shared/components/button";
import Card from "Shared/components/card";
import { rgba } from "polished";

export const Container = styled(Card)`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  background: ${`radial-gradient(
    circle,
    ${rgba("#5f9ea0", 0.32)} 23%,
    ${rgba("#2c7678", 0.6)} 80%
  )`};
`;

export const Avatar = styled.img`
  height: 250px;
`;

export const Body = styled.div`
  width: 100%;
  padding: 32px 24px;
`;

export const Greeting = styled.p`
  margin: 24px 0;
  ${text("medium", 500, COLORS.TEXT)};
`;

export const Name = styled.p`
  margin: 12px 0;

  ${text("large", 600, COLORS.TEXT)};
`;

export const Purpose = styled.p`
  margin: 12px 0;

  ${text("medium", 500, COLORS.TEXT)};
`;

export const GradientText = styled.span`
  ${gradientText("90deg", ["#9c5ac8 60%", "#168ebc"])};
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
`;

export const Edit = styled(Button)``;

export const Delete = styled(Button).attrs(() => ({
  bgColor: "transparent",
  textColor: COLORS.GRAY_LIGHT,
}))``;

export const NotFound = styled.p`
  font-style: italic;
`;
