import { Container, List, Item, Whats, LinkedIn, Github } from './social-media.styled'

const SocialMedia = () => {
  return (
    <Container>
      <List>
        <Item >
          <a target='_blanck' href="https://api.whatsapp.com/send?phone=+5512981305028&text=Oi, vim pelo seu portfolio" >
            <Whats />
          </a>
        </Item>
        <Item>
          <a target='_blanck' href="https://www.linkedin.com/in/michael-portes-5217ab160/" >
            <LinkedIn />
          </a>
        </Item>
        <Item>
          <a target='_blanck' href="https://github.com/michalPortes" >
            <Github />
          </a>
        </Item>
      </List>
    </Container>
  )
}

export default SocialMedia