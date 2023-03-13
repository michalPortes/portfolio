import styled from "styled-components";


export const HomeContainer = styled.div`
  background-color:rgb(242,242,247);
  `
export const AbultMe = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 4rem;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
  }
`

export const Div = styled.div`
  display: none;
`

export const Langue = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 4rem;
`