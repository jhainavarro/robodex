import { rem, rgba } from "polished";
import { Link } from "react-router-dom";
import { text } from "Shared/components/utils/mixins";
import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";

export const Container = styled.div``;

export const Avatar = styled.img`
  height: 150px;
`;

export const Name = styled.p`
  font-size: ${rem("20px")};
  font-weight: 600;

  ${text("large", 600, COLORS.TEXT)};
`;

export const Purpose = styled.p``;

export const Edit = styled(Link)`
  padding: 12px;
  border: none;
  background: none;
  color: ${COLORS.TEXT_LIGHT};
  cursor: pointer;

  :hover {
    background-color: ${rgba(COLORS.TEXT_LIGHT, 0.1)};
  }
`;

export const Delete = styled.button`
  padding: 12px;
  border: none;
  background: none;
  color: ${COLORS.RED};
  cursor: pointer;

  :hover {
    background-color: ${rgba(COLORS.RED, 0.1)};
  }
`;

export const NotFound = styled.p`
  font-style: italic;
`;
