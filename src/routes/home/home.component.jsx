import GitRepositories from '../../components/git-repositories/git-repositories.component'
import Image from '../../components/git-image/git-image.component'
import Description from '../../components/description/description.component'
import Footer from '../../components/footer/footer.component'


import { HomeContainer, AbultMe } from './home.styled.jsx'


const Home = () => {



  return (
    <HomeContainer>
      <AbultMe>
        <Image />
        <Description />
      </AbultMe>
      <GitRepositories />
      <Footer />
    </HomeContainer>
  )
}

export default Home