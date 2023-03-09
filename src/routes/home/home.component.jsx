import GitRepositories from '../../components/git-repositories/git-repositories.component'
import Image from '../../components/git-image/git-image.component'
import Description from '../../components/description/description.component'
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