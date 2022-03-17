import { rem, rgba } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Name = styled(Link)`
  width: 100%;
  padding: 12px;
  color: #02091a;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export const Back = styled(Link)`
  padding: 8px 16px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid ${rgba("#000000", 0.4)};
  color: #02091a;
  font-size: ${rem("11px")};
  text-decoration: none;

  :hover {
    background-color: ${rgba("#000000", 0.05)};
  }
`;

export const EmptyText = styled.p``;
