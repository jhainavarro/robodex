import { text } from "Shared/components/utils/mixins";
import styled, { css } from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";

export const Label = styled.label`
  margin: 0 0 8px 0;
  text-transform: uppercase;

  ${text("xsmall", 600)};
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`;

export const InputContainer = styled.div`
  padding: 8px;
  border: 1px solid ${COLORS.TEXT};
  border-radius: 4px;

  ${text("medium", 400, COLORS.TEXT)};
`;

export const Error = styled.p`
  margin: 8px 0;

  ${text("xsmall", 400, COLORS.ERROR)};
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const TextField = styled.div<{ hasError?: boolean }>`
  display: flex;
  flex-direction: column;

  :focus-within {
    ${Label} {
      color: ${COLORS.BLUE};
    }

    ${InputContainer} {
      border: 1px solid ${COLORS.BLUE};
    }
  }

  ${(props) =>
    props.hasError &&
    css`
      ${Label} {
        color: ${COLORS.ERROR};
      }

      ${InputContainer} {
        border-color: ${COLORS.ERROR};
      }
    `}
`;
