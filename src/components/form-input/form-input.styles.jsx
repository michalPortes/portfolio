import styled, { css } from "styled-components"

const SubColor = 'grey';
const MainColor = 'black';

const ShrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${MainColor};
  `

export const FormInputLabelContainer = styled.label`
    color: ${SubColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${({ shrink }) => shrink && ShrinkLabelStyles};
  `

export const FormInputContainer = styled.input`
  display: block;
  background: none;
  background-color: transparent;
  color: ${SubColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  border: none;
  width: 100%;
  border-radius: 0;
  border-bottom: 1px solid ${SubColor};
  margin: 25px 0;
  justify-content: center;
  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabelContainer} {
    ${ShrinkLabelStyles};
  }
`

export const Group = styled.div`
  position: relative;
  margin: 25px 0px;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
 `
