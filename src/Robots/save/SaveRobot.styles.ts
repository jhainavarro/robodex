import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";
import TextField from "Shared/components/text-field";
import Button from "Shared/components/button";
import { rgba } from "polished";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 12px 24px ${rgba(COLORS.GRAY, 0.24)};
  width: min-content;
  padding: 32px 64px;
  margin: 0 auto;
`;

export const Input = styled(TextField)``;

export const Uploader = styled.div`
  position: relative;
  border-radius: 20px;
  margin-bottom: 24px;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
`;

export const Refresh = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 24px;
  width: 24px;
  height: 24px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  color: ${COLORS.TEXT_XLIGHT};

  svg {
    fill: ${COLORS.GRAY_XXXLIGHT};
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Primary = styled(Button)`
  margin-top: 20px;
`;

export const Secondary = styled(Button).attrs(() => ({
  bgColor: COLORS.GRAY_XLIGHT,
}))`
  margin-top: 8px;
`;

export const Result = styled.p<{ success?: boolean }>`
  margin: 20px 0 0 0;
  color: ${(props) => (props.success ? COLORS.SUCCESS : COLORS.SUCCESS)};
`;
