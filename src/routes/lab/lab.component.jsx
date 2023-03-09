import { useContext } from 'react'
import { useEffect } from 'react'
import { MobileContext } from '../../context/mobile.context'
import { Pokemons } from '../../utils'


import { Container, Title } from './lab.styled'


const Lab = () => {

  const { showMenu } = useContext(MobileContext)

  useEffect(() => {
    Pokemons()
      .then(resp => (console.log(resp)))

  }, [])
  return (
    <>{
      showMenu ?
        <Container>
          <Title>
            Pokemons
          </Title>
        </Container>
        :
        <>
        </>
    }
    </>
  )
}

export default Lab