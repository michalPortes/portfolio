import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const NavigationConteiner = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #222222;
  border-bottom: 1px solid #9e9e9e;
`

export const Text = styled.h2`
  color: #820ad1;
  align-items: center;
`

export const Span = styled.span`
  color: rgb(164, 126, 189);
`

export const LogoContainer = styled(Link)`
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
  color:rgb(130, 10, 209);
  margin: 10px 15px;
  text-decoration: none;
  transition: 0.3s;

  &:hover{
    color: rgb(164, 126, 189);
  }
`