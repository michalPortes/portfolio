import { useState } from 'react'
import FormInput from '../form-input/form-input.component'

import { singInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'


import { SingUpContainer, TextHs, ButtonContainer } from './sing-in.styled'


const defaulFormFields = {
  email: '',
  password: '',
}

const SingIn = () => {

  const [formFields, setFormFields] = useState(defaulFormFields)
  const { email, password } = formFields;


  const resetFormFields = () => {
    setFormFields(defaulFormFields)
  }

  const singInWithGoogle = async () => {
    await singInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('no user associated with email')
          break
        default:
          console.log(error)
      }
    }
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <SingUpContainer>
      <TextHs>Already have an account?</TextHs>
      <span>Sing up with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonContainer>
        </ButtonContainer>
      </form>
    </SingUpContainer>
  )
}


export default SingIn