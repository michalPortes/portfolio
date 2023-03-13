import Description from '../../components/description/description.component'
import Image from '../../components/git-image/git-image.component'
import Languages from '../../components/langauges/languages.component'
import GitRepositories from '../../components/git-repositories/git-repositories.component'
import Footer from '../../components/footer/footer.component'


import { HomeContainer, AbultMe, Div } from './home.styled.jsx'
import { useContext } from 'react'
import { MobileContext } from '../../context/mobile.context'


const Home = () => {

  const { showMenu } = useContext(MobileContext)

  return (
    <>{
      showMenu ?

        <HomeContainer>
          <AbultMe>
            <Image />
            <Description />
          </AbultMe>
          <Languages />
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