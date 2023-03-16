import { useContext } from 'react'

import Description from '../../components/description/description.component'
import Image from '../../components/git-image/git-image.component'
import Languages from '../../components/langauges/languages.component'
import GitRepositories from '../../components/git-repositories/git-repositories.component'
import Footer from '../../components/footer/footer.component'
import ReadmeState from '../../components/readme-states/readme-states.component'

import { MobileContext } from '../../context/mobile.context'

import {
  HomeContainer,
  AbultMe,
  Langue,
  Div
} from './home.styled.jsx'



const Home = () => {

  const { showMenu } = useContext(MobileContext)

  return (
    <>

      {
        showMenu

          ?

          <HomeContainer>
            <AbultMe>
              <Image />
              <Description />
            </AbultMe>
            <Langue>
              <ReadmeState />
              <Languages />
            </Langue>
            <GitRepositories />
            <Footer />
          </HomeContainer>
          :
          <Div></Div>
      }

    </>
  )
}

export default Home