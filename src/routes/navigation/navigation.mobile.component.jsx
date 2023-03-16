import { MobileContainer, NavLinksMobile, NavLinkMobile } from './navigation.styled'
import TurnMenu from './navigation.component'
const MenuMobile = () => {



  return (
    <MobileContainer>
      <NavLinksMobile>
        <NavLinkMobile to='/' onClick={TurnMenu}>
          Home
        </NavLinkMobile>
        <NavLinkMobile to='timeline' onClick={TurnMenu}>
          timeline
        </NavLinkMobile>
        <NavLinkMobile to='lab' onClick={TurnMenu}>
          Laboratory
        </NavLinkMobile>
      </NavLinksMobile>
    </MobileContainer>
  )

}

export default MenuMobile