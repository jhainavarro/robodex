import { rem, rgba } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Container = styled.div``;

export const Name = styled.p`
  font-size: ${rem("20px")};
  font-weight: 600;
`;

export const Purpose = styled.p``;

export const Edit = styled(Link)`
  padding: 12px;
  border: none;
  background: none;
  color: #1d2030;
  cursor: pointer;

  :hover {
    background-color: ${rgba("#1d2030", 0.1)};
  }
`;

export const Delete = styled.button`
  padding: 12px;
  border: none;
  background: none;
  color: #da4139;
  cursor: pointer;

  :hover {
    background-color: ${rgba("#da4139", 0.1)};
  }
`;

export const NotFound = styled.p`
  font-style: italic;
`;
