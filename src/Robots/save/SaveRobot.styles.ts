import { text } from "Shared/components/utils/mixins";
import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin: 4px;
  text-transform: uppercase;

  ${text("xsmall", 600)};
`;

export const Input = styled.input``;

export const Error = styled.p`
  margin: 8px 0;

  ${text("xsmall", 400, COLORS.ERROR)};
`;

export const Save = styled.button`
  margin-top: 20px;
`;

export const Reset = styled.button``;

export const Result = styled.p<{ success?: boolean }>`
  margin: 20px 0 0 0;
  color: ${(props) => (props.success ? COLORS.SUCCESS : COLORS.SUCCESS)};
`;
