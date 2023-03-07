import styled from "styled-components";
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs'

export const Container = styled.div`
  display: flex;
  height: auto;
  height: 4rem;
  justify-content: left;
  padding-right: 3rem;
  `

export const Whats = styled(BsWhatsapp)`
    color: #25d366;
    height: 1.5rem;
    width: 1.5rem;
    transition: transform 0.25s ease-out; 
    &:hover{
      transform: translateY(-10px);
    }
  `

export const LinkedIn = styled(BsLinkedin)`
    color: #0a66c2;
    height: 1.5rem;
    width: 1.5rem;
    transition: transform 0.25s ease-out; 
    &:hover{
      transform: translateY(-10px);
    }
  `

export const Github = styled(BsGithub)`
    color: #242424;
    height: 1.5rem;
    width: 1.5rem;
    transition: transform 0.25s ease-out; 
    &:hover{
      transform: translateY(-10px);
    }
  `
export const Item = styled.li`
`
export const List = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    
    ${Item} {
      position: relative;
      list-style: none;
      margin: 0 10px;
      height: auto;
      cursor: pointer;
    }
      ${Item} {
        ::before{
          position: absolute;
          top: 0;
          left: 0;
          font-size: 3.11em;
          height: 0;
        }
      }
  `
