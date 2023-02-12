import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const NavigationConteiner = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(242,242,247);
  border-bottom: 2px solid #9e9e9e49;
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