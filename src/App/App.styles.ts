import styled from "styled-components/macro";
import * as COLORS from "Shared/components/utils/colors";
import { glass, text } from "Shared/components/utils/mixins";

export const App = styled.div`
  height: 100vh;
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
  padding: 8px;

  ${glass(COLORS.HEADER_BG_COLOR, 0.5, "24px")};
`;

export const Content = styled.div`
  padding: 64px 32px 32px 32px;
  flex-grow: 1;
  overflow: auto;
`;

export const Logo = styled.img`
  height: 48px;
  pointer-events: none;
`;

export const LogoName = styled.p`
  margin: 0 0 0 12px;
  letter-spacing: 0.08rem;
  text-align: center;
  text-transform: uppercase;

  ${text("xlarge", 700, COLORS.LOGO_NAME_LIGHT)};
`;
