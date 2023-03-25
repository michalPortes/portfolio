import styled from 'styled-components'

export const BaseButton = styled.button`
  display: flex;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  margin: 45px;
  font-size: 15px;
  background-color: #2f80ed;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 25rem;
  justify-content: center;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #cce1fd;
    color: #2f80ed;
  }  
  
`

export const GoogleButton = styled(BaseButton)`
    background-color: #cce1fd;
    color: #2f80ed;
    transition: 0.2s;
    &:hover {
      background-color: #357ae8;
      color: white;
    }  
`
export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`