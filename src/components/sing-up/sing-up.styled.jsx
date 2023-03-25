import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const SingUpContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(242,242,247);
  @media (max-width: 768px) {
    height: auto;
  }
`

export const SingUpHs = styled.h2`
  margin: 10px 0;
`

export const TextHs = styled.h2`
  margin: 10px 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

`

export const Conteiner = styled.div`
  display: flex;
  padding: 4rem;
  background-color: rgba(229,229,234,0.752);
  box-shadow: 0px 0px 12px rgba(142, 142, 147, 0.111);
  border-radius: 27px;
  justify-content: center;;
  align-items: center;
  flex-direction: column;
  margin-top: 7rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 1rem 1rem;
  }
`

export const LinkAccess = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #2f80ed;
  transition: all 0.3s;
  &:hover{
    color: #00357a;
  }
`

export const ConteinerBar = styled.div`
  border: 1px solid rgb(187, 187, 187);
  border-radius: 10px;
  width: 100%;
  height: 15px;
  box-sizing: border-box;
  margin-bottom: 15px;
  
  
`
export const ProgressBar = styled.div`
  
  background: #2f80ed;
  border-radius: 10px;
  height: 100%;
  transition: all .5s;
`