import styled from 'styled-components'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const NavigationConteiner = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(242,242,247);
  border-bottom: 2px solid #9e9e9e49;

  @media (max-width: 768px){
    justify-content: space-between;
    padding-left: 1rem;
  }
`

export const Text = styled.h2`
  color: rgb(142,142,147);
  align-items: center;
`

export const Span = styled.span`
  color: rgb(58, 58, 60);
`

export const LogoContainer = styled(Link)`
  display: contents;
  height: 100%;
  padding-left: 5rem;
  text-decoration: none;
`
export const NavLinks = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  
  @media (max-width: 768px) {
    display: none;
  }
`
export const NavLink = styled(Link)`
  cursor: pointer;
  color:rgb(99, 99, 102);
  margin: 10px 15px;
  text-decoration: none;
  transition: 0.3s;
  &:hover{
    color: rgb(0, 0, 0);
  }
`

export const MenuMoble = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 2rem;
    cursor: pointer;
  }
`

export const Line = styled.span`
  @media (max-width: 768px) {
    background-color: black;
    width: 20px;
    height: 1px;
    margin: 3px;
  }
`
export const OpenMenu = styled(AiOutlineMenu)`
  width: 1.3rem; 
  height: 1.3rem; 
`

export const MenuClose = styled(AiOutlineClose)`
  width: 1.3rem;
  height: 1.3rem; 
  transition: Transitions 1s all;
`
export const Button = styled.button`
  display: none;
  @media (max-width: 768px){
      display: contents;
  }
`