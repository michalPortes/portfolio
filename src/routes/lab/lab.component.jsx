import { useEffect } from 'react'
import { Pokemons } from '../../utils'


import { Container, Title } from './lab.styled'


const Lab = () => {


  useEffect(() => {
    Pokemons()
      .then(resp => (console.log(resp)))

  }, [])
  return (
    <Container>
      <Title>
        Pokemons
      </Title>
    </Container>
  )
}

export default Lab