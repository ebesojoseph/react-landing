import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/home">ebstech</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="blog">Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="products">Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="products">Career</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about-us">About Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="sign-up">Join Our Community</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
