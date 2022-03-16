import { rem, rgba } from "polished";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export const App = styled.div`
  display: grid;
  grid-template-areas: "Sidebar Content";
  grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

export const Sidebar = styled.div`
  grid-area: Sidebar;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  background-color: #282c34;
`;

export const Content = styled.div`
  grid-area: Content;
  padding: 32px;
`;

export const Logo = styled.img`
  height: 100px;
  pointer-events: none;
`;

export const LogoName = styled.p`
  margin: 0 0 32px 0;
  color: #ffffff;
  font-size: ${rem("28px")};
  font-weight: 700;
  letter-spacing: 0.08rem;
  text-align: center;
  text-transform: uppercase;
`;

export const Nav = styled.nav``;

export const Link = styled(NavLink)`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  color: #ffffff;
  text-decoration: none;

  :hover {
    color: #b2dfdb;
    background-color: ${rgba("#02091a", 0.8)};
  }
`;
