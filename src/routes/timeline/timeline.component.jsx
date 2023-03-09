
import { useContext } from 'react'
import Works from '../../components/works/works.component'
import { MobileContext } from '../../context/mobile.context'

import { Container } from './timeline.styled'


const Timeline = () => {

  const { showMenu } = useContext(MobileContext)

  return (
    <>
      {
        showMenu ?

          <Container>
            <Works />
          </Container>
          :
          <>
          </>
      }
    </>
  )
}

export default Timeline
