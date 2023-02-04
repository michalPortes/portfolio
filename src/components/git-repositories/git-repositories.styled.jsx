import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
`

export const Title = styled.h1`
  color: white;
  text-align: center;
  padding: 2rem;
`
export const ContainerProjects = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`
export const Project = styled.div`
  text-align: left;
  border-radius: 10px;
  padding: .75rem;
  border: 0.15rem solid #9e9e9e;
  cursor: pointer;
`

export const Name = styled.h3`
  color: rgb(164, 126, 189);
  margin: 0px 0px 20px 0px
`

export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Languages = styled.h6`
  color: #9e9e9e;
  margin: 10px 0px 5px 0px;
`

export const DataCreate = styled.h6`
  color: #9e9e9e;
  margin: 10px 0px 5px 0px;
`