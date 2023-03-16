import { useEffect } from 'react'
import { TECH } from '../../utils'

import { Container, Title, IconContainer, ContainerIcons, Link } from './languages.styled'

const Languages = () => {

  useEffect(() => {

  }, [])

  return (
    <Container>
      <Title>technologies</Title>
      <ContainerIcons>
        {
          TECH.map((item) => {
            return (
              <IconContainer key={item.id}>
                <Link href={item.URL} target="_blank">
                  {item.icon}
                </Link>
              </IconContainer>
            )
          })
        }
      </ContainerIcons>
    </Container>
  )
}


export default Languages