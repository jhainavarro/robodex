import { rgba } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";
import { text } from "Shared/components/utils/mixins";

export const Name = styled(Link)`
  width: 100%;
  padding: 12px;

  ${text("medium", 500, COLORS.TEXT)};

  :hover {
    text-decoration: underline;
  }
`;

export const EmptyText = styled.p``;

export const AddButton = styled(Link)`
  padding: 8px 12px;
  margin-top: 28px;
  border-radius: 4px;
  background: ${`linear-gradient(170deg, ${COLORS.BLUE_LIGHT} 35%, ${COLORS.BLUE} 100%)`};

  ${text("small", 500, COLORS.TEXT_LIGHT)};

  box-shadow: 0 1px 2px ${rgba("#000000", 0.15)};
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    box-shadow: 0 3px 8px ${rgba("#000000", 0.24)};
  }
`;

export const AddLink = styled(Link)`
  margin-left: 4px;

  :hover {
    text-decoration: underline;
  }
`;
