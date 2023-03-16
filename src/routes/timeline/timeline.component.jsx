
import { useContext } from 'react'
import Works from '../../components/works/works.component'
import Footer from '../../components/footer/footer.component'
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
            <Footer />
          </Container>
          :
          <>
          </>
      }
    </>
  )
}

export default Timeline
