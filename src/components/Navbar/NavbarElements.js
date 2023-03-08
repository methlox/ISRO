import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 0px;
  max-width: 1300px;
`;
export const Icon = styled.img`
  height: 80px;
  width: 100px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    position: relative;
    top: 0px;
    left: 60px;
  }
`;

export const MobileIcon = styled.div`
  display: none; // shouldn't be displayed in laps, only in mobile applications

  @media screen and (max-width: 1340px) {
    display: block;
    position: absolute;
    top: 12px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: right;
  list-style: none;
  text-align: center;
  margin-right: -742px;

  @media screen and (max-width: 1340px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavItemL = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -42px;

  @media screen and (max-width: 1340px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #f2b33d;
  }
`;