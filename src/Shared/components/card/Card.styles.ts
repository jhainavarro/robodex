import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";
import { rgba } from "polished";

export const Card = styled.div`
  width: min-content;
  box-shadow: 0 4px 8px ${rgba(COLORS.GRAY, 0.24)};
  transition: all 0.2s ease-in-out;

  :focus-within,
  :hover {
    box-shadow: 0 8px 16px ${rgba("#000000", 0.24)};
  }
`;
