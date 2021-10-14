import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  justify-self: center;
  display: grid;
  background: black;
  tansition: 0.3s ease-in-out;
  top:0
  // opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  // top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
position:absolute
top:1.2rem;
right:1.5rem;
background:transparent;
font-size: 2rem;
cursor :pointer;
outline:none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  justify-content: center;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: white;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content:center;
`;

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background:#01bf71;
white-space : nowrap;
color:white;
padding:16px 64px;
outline:none;
cursor:pointer;
margin-top:10px;
border:none;
font-size:16px;
text-decoration:none;
tansition: all 0.2s ease-in-out;


&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #01bf71;
}
`

export const SidebarMenu =  styled.div`
`