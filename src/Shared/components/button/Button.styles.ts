import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";
import { darken, rgba } from "polished";
import { ButtonProps } from "./Button";

const baseColor = `linear-gradient(282deg, ${COLORS.BLUE} 13.22%, ${COLORS.BLUE_LIGHT} 100%)`;

export const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  color: ${(props) => props.textColor ?? COLORS.TEXT_XLIGHT};
  font-weight: 600;
  background: ${(props) => props.bgColor ?? baseColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px ${rgba("#000000", 0.24)};

  :disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.8;
  }

  :hover {
    box-shadow: 0 4px 12px ${rgba("#000000", 0.24)};
  }

  :active {
    background-color: ${(props) => darken(0.05, props.bgColor ?? COLORS.BLUE)};
    transform: scale(0.98);
  }
`;
