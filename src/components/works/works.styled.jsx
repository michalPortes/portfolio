import styled from 'styled-components'



export const ContainerWork = styled.div`
  background-color: transparent;
  justify-content: center;
  width: 60%;
  margin: 0 20% 0 20%;
  

`

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  color: rgb(99, 99, 102);
  padding-bottom: 1rem;
`

export const Date = styled.h2`
  margin: 0 20px 0 20px;
  color: rgb(99, 99, 102);
  @media (max-width: 720px) {
    margin: 0 0 30px 0;
  }
`

export const Lines = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgba(229, 229, 234, 0.752) ;
  border-left: 4px solid #3f3f3f;
  border-radius: 10px;
  margin: 6rem 0 10rem 0;
  padding: 1rem;
  &:first-child{
    margin-top: 4rem;
  }
  &:hover{
    border-left: 4px solid #2f80ed;

    ${Title}{
    color: #2f80ed
  }
  ${Date}{
    color: #2f80ed
  }
  }
  
  @media (max-width: 720px) {
    
    align-items: center;
    flex-direction: column;
    
  }
`



export const Container = styled.div`
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: rgb(99, 99, 102);
  `


export const Description = styled.span`
  display: flex;
`

export const WorkTime = styled.span`
  display: flex;
  justify-content: end;
  padding-top: 2rem;
  color:  rgb(99, 99, 102);
  
  @media (max-width: 720px) {
    align-items: center;
    justify-content: center;
    font-size: .9rem;
  }
`

export const StepTitle = styled.b`
  padding-right: 8px;
` 