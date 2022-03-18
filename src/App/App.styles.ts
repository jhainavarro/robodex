import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";
import { glass, text } from "Shared/components/utils/mixins";
import { Link } from "react-router-dom";

export const App = styled.div`
  height: 100vh;
  width: clamp(800px, 70%, 1200px);
  margin: 0 auto;
  position: relative;
  display: flex;
  overflow: auto;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  z-index: 2;

  ${glass(COLORS.HEADER_BG_COLOR, 0.5, "24px")};
`;

export const AddButton = styled(Link)`
  padding: 8px 16px;
  margin-right: 12px;
  border-radius: 4px;
  background: ${`linear-gradient(170deg, ${COLORS.BLUE_XLIGHT} 35%, ${COLORS.BLUE} 100%)`};

  ${text("medium", 600, COLORS.TEXT_LIGHT)};

  :active {
    transform: scale(0.98);
  }
`;

export const Content = styled.div`
  padding: 96px 32px 32px 32px;
  flex-grow: 1;
  overflow: auto;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 48px;
`;

export const LogoName = styled.p`
  margin: 0 0 0 12px;
  letter-spacing: 0.08rem;
  text-align: center;
  text-transform: uppercase;

  ${text("xlarge", 700, COLORS.LOGO_NAME_LIGHT)};
`;
