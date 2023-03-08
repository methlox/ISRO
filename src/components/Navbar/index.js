import React from "react";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemL,
  NavLinks,
  Icon,
} from "./NavbarElements";

import { FaBars } from "react-icons/fa";
import Icon1 from "../../Media/isro.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Icon src={Icon1} alt="isro logo" />
          <NavMenu>
            <NavItem>
              <NavLinks>Government of India</NavLinks>
            </NavItem>
          </NavMenu>
          <NavItemL>
            <NavItem>
              <NavLinks>English</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Hindi</NavLinks>
            </NavItem>
          </NavItemL>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
