import { rem, rgba } from "polished";
import styled from "styled-components/macro";

export const Container = styled.div``;

export const Name = styled.p`
  font-size: ${rem("20px")};
  font-weight: 600;
`;

export const Purpose = styled.p``;

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
