import './form-input.styles.jsx';


import { Group, FormInputContainer, FormInputLabelContainer } from './form-input.styles.jsx'
const FormInput = ({ label, ...inputOptions }) => {
  return (
    <Group>
      <FormInputContainer {...inputOptions} />
      {label && (
        <FormInputLabelContainer
          shrink={inputOptions.value.length}>
          {label}
        </FormInputLabelContainer>
      )}
    </Group>
  )
}

export default FormInput