import styled from "styled-components";

export const SingUpContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(242,242,247);
`
export const TextHs = styled.h2`
  margin: 10px 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    
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
    padding: 1rem;
  }
`