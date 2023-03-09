import { Container, Text, Span } from './footer.styled'
import SocialMedia from '../social-media/social-media.component'

const Footer = () => {

  return (
    <Container>
      <Text>
        &lt; <Span>Michael</Span> &frasl;&gt;
      </Text>
      <SocialMedia />
    </Container>
  )
}

export default Footer