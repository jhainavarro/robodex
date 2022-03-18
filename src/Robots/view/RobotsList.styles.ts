import { rgba } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";
import { text } from "Shared/components/utils/mixins";

export const Catalog = styled.div`
  width: clamp(800px, 90%, 1500px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5em;
`;

export const CardHeader = styled.div`
  overflow: hidden;
`;

export const Avatar = styled.img`
  height: 250px;
  width: 250px;
  transition: all 0.4s ease-out;
`;

export const Name = styled.p`
  width: 100%;
  padding: 8px;
  margin: 0;
  text-align: center;
  transition: all 0.2s ease-in-out;

  ${text("large", 600, COLORS.TEXT)};
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  box-shadow: 0 4px 8px ${rgba("#000000", 0.35)};
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px ${rgba("#000000", 0.24)};
    background: ${`linear-gradient(
      150deg,
      ${rgba(COLORS.BLUE_LIGHT, 0.1)} 35%,
      ${rgba(COLORS.BLUE, 0.3)} 100%
    )`};

    ${Avatar} {
      transform: scale(1.15);
    }
  }
`;

export const EmptyText = styled.p``;

export const AddButton = styled(Link)`
  padding: 12px 16px;
  margin-top: 28px;
  border-radius: 4px;
  background: ${`linear-gradient(170deg, ${COLORS.BLUE_LIGHT} 35%, ${COLORS.BLUE} 100%)`};

  ${text("medium", 500, COLORS.TEXT_LIGHT)};

  box-shadow: 0 1px 2px ${rgba("#000000", 0.15)};
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    box-shadow: 0 3px 8px ${rgba("#000000", 0.24)};
  }

  :active {
    transform: scale(0.98);
  }
`;

export const AddLink = styled(Link)`
  margin-left: 4px;

  :hover {
    text-decoration: underline;
  }
`;
