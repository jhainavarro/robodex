import { rem, rgba } from "polished";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

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

  background-color: #34495e;

  @supports (backdrop-filter: blur(24px)) {
    backdrop-filter: blur(24px);
    background-color: ${rgba("#34495e", 0.5)};
  }
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
  color: #ffffff;
  font-size: ${rem("28px")};
  font-weight: 700;
  letter-spacing: 0.08rem;
  text-align: center;
  text-transform: uppercase;
`;

export const Link = styled(NavLink)`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  color: #ffffff;

  :hover {
    color: #b2dfdb;
    background-color: ${rgba("#02091a", 0.8)};
  }
`;
