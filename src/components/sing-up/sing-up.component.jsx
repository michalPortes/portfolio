import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import { SingUpContainer, Conteiner, SingUpHs, ConteinerBar, ProgressBar } from './sing-up.styled'



const defaulFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SingUp = () => {

  const [formFields, setFormFields] = useState(defaulFormFields)
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaulFormFields)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('User creation encoutered an error', error);
      }
    }
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const calculateProgress = (event) => {

    let totalValue = 0
    let parcial = 25

    if (displayName) {

      const nameValue = displayName.split(' ')

      if (nameValue[1]) {

        totalValue += parcial
      }
    }

    if (email) {

      let emailValue = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (emailValue.test(email)) {

        totalValue += parcial
      }
    }
    if (password.length >= 6) {

      totalValue += parcial
    }
    if (confirmPassword === password && confirmPassword !== '') {

      totalValue += parcial
    }

    return totalValue
  }

  calculateProgress()

  return (
    <SingUpContainer>
      <Conteiner>
        <ConteinerBar>
          <ProgressBar style={{ width: `${calculateProgress()}%` }}></ProgressBar>
        </ConteinerBar>
        <SingUpHs>Don't have an account?</SingUpHs>
        <span>Sing up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Display Name'
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value={displayName}
          />

          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />

          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
          />

          <FormInput
            label='Confirm Password'
            type='password'
            required
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
          />

          <Button buttonType={BUTTON_TYPES_CLASSES.base} type='submit'>Sign Up</Button>
        </form>
      </Conteiner>
    </SingUpContainer>
  )
}


export default SingUp