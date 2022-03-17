import { rem, rgba } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Name = styled(Link)`
  width: 100%;
  padding: 12px;
  color: #02091a;

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

  :hover {
    background-color: ${rgba("#000000", 0.05)};
  }
`;

export const EmptyText = styled.p``;

export const AddButton = styled(Link)`
  padding: 8px 12px;
  margin-top: 28px;
  border-radius: 4px;
  background: linear-gradient(170deg, #abebda 35%, #11abd9 100%);
  color: #1d2030;
  font-size: ${rem("14px")};
  font-weight: 500;

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
