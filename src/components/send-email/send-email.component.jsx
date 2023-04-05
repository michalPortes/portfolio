import { Container } from './send-email.styled'
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';


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
    <form onSubmit={handleSubmit}>
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
      <FormInput value={message} onChange={(e) => setMessage(e.target.value)} />

      <button type="submit">Send</button>
    </form >
  );
}

export default SendEmail  