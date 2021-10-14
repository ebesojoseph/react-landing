import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLinks,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./SideBarElements";
export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="blog">Blog</SidebarLinks>
          <SidebarLinks to="products">Products</SidebarLinks>
          <SidebarLinks to="products">Career</SidebarLinks>
          <SidebarLinks to="about-us">About Us</SidebarLinks>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
