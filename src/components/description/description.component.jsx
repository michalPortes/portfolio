import { useEffect, useState } from 'react'
import { ReadMe } from '../../utils'

import { Title, Container } from './description.styled'

const Description = () => {

  const [readme, setReadme] = useState('')

  useEffect(() => {
    ReadMe()
      .then(data => {
        const content = atob(data.data.content);
        setReadme(content)
      })
      .catch(err => console.log(err))
  }, [])

  console.log(readme)
  return (
    <Container>
      <Title>Aboult me</Title>
      <div dangerouslySetInnerHTML={{ __html: readme }} />
    </Container>
  )
}


export default Description