import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  padding-bottom: 4rem;
`

export const Title = styled.h1`
  color: rgb(58, 58, 60);
  text-align: center;
  padding: 6rem 0 6rem 0;
`
export const ContainerProjects = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;


  @media (max-width: 952px) {
   grid-template-columns: 1fr 1fr;
  }
  

  @media (max-width: 768px) {
   grid-template-columns: 1fr;
  }
  
`

export const Name = styled.h3`
  color: rgb(99, 99, 102);
  text-decoration: none;
  margin: 0px 0px 20px 0px;
`

export const Project = styled.div`
  text-align: left;
  border-radius: 10px;
  border-bottom: 4px solid #3f3f3f;
  padding: .75rem;
  background-color: rgba(229, 229, 234, 0.752) ;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  box-shadow: 0px 0px 12px rgba(142, 142, 147, 0.111);
  cursor: pointer;
  &:hover{
    border-bottom: 4px solid #2f80ed;
    transform: scale(1.02);
    box-shadow: 0px 0px 12px rgba(158, 158, 158, 0.3);

    ${Name}{
      color: rgb(47, 128, 237);
    }
  }
`

export const Link = styled.a`
  text-decoration: none;
`


export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Languages = styled.h6`
  color: rgb(99, 99, 102, 0.678);
  margin: 10px 0px 5px 0px;
`

export const DataCreate = styled.h6`
  color: rgba(99, 99, 102, 0.678);
  margin: 10px 0px 5px 0px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover{
    color: rgb(47, 128, 237);
  }
`