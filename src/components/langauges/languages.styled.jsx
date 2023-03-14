import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h4`
  color: rgb(58, 58, 60);
  margin: 2rem;
`
export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Link = styled.a`
  text-decoration: none;
  color: rgb(99, 99, 102);

  &:hover{
    color: #2f80ed;
  }
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  transition: 0.2s all;
  cursor: pointer;
  &:hover{
    font-size: 3rem;
  }
`