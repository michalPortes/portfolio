import { useContext } from 'react'
import { Container } from './authentication.styled'
import { MobileContext } from '../../context/mobile.context'

import SingIn from '../../components/sing-in/sing-in.component'

const Auth = () => {
  const { showMenu } = useContext(MobileContext)
  return (
    <>
      {
        showMenu ?
          <Container>
            <SingIn />
          </Container>
          :
          <></>}
    </>
  )
}

export default Auth