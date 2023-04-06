import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { Container, Forms, Text } from './send-email.styled'


const defaulFormFields = {
  email: '',
  password: '',
}



const SendEmail = () => {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [formFields, setFormFields] = useState(defaulFormFields)
  const { email, password } = formFields;

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail({ name, email, message });
  };

  const sendEmail = async (data) => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    console.log(resData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }


  return (
    <Container>

      <Forms onSubmit={handleSubmit}>
        <div>

          <FormInput
            label='Name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />
        </div>

        <Text value={message} placeholder='Mensage here' onChange={(e) => setMessage(e.target.value)} />

        <Button type="submit" buttonType='google' >Send</Button>
      </Forms >
    </Container>
  );
}

export default SendEmail  