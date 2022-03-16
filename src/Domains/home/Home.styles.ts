import { rem, rgba } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Title = styled.h1`
  margin: 24px 0;
  font-size: ${rem("48px")};
  font-weight: 600;
`;

export const Subtitle = styled.h2`
  font-size: ${rem("24px")};
  font-weight: 500;
`;

export const Actions = styled.div`
  margin-top: 64px;
`;

export const LinkButton = styled(Link)`
  padding: 16px 32px;
  border-radius: 4px;
  background: linear-gradient(90deg, #6be0b6 0%, #1fe4b0 35%, #11abd9 100%);
  color: #1d2030;
  font-size: ${rem("20px")};
  font-weight: 600;
  text-decoration: none;

  box-shadow: 0 1px 2px ${rgba("#000000", 0.15)};
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    box-shadow: 0 4px 12px ${rgba("#000000", 0.24)};
  }
`;
