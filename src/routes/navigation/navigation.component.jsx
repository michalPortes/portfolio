import { Fragment, useEffect, useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Profile } from '../../utils/github/utils'

import { MobileContext } from '../../context/mobile.context'
import { UserContext } from '../../context/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'


import { NavigationConteiner, LogoContainer, Text, Span, NavLinks, NavLink, MenuMoble, OpenMenu, MenuClose, Button, MobileContainer, NavLinksMobile, NavLinkMobile, SingIn } from './navigation.styled'


const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const { showMenu, setShowMenu } = useContext(MobileContext)

  const [name, setName] = useState('')
  useEffect(() => {
    Profile()
      .then(resp => {
        setName(resp.data.name)
      })
      .catch(resp => resp)
      .finally(resp => resp)
  }, [])


  const TurnMenu = () => {

    setShowMenu(!showMenu)
  }
  return (
    <Fragment>
      {
        showMenu ?

          <NavigationConteiner>
            <LogoContainer to='/'>
              <Text>
                &lt; <Span>{name}</Span> &frasl;&gt;
              </Text>
            </LogoContainer>
            <NavLinks>
              <NavLink to='/'>
                home
              </NavLink>
              <NavLink to='/timeline'>
                timeline
              </NavLink>
              <NavLink to='/lab'>
                Laboratory
              </NavLink>
              {
                currentUser ? (
                  <SingIn onClick={signOutUser} >
                    Sing Out
                  </SingIn>)
                  :
                  (<SingIn to='/Auth'>
                    Sing In
                  </SingIn>)

              }
            </NavLinks>
            <Button onClick={TurnMenu}>
              <MenuMoble >
                <OpenMenu />
              </MenuMoble>
            </Button>
          </NavigationConteiner>
          :
          <>
            <Button onClick={TurnMenu}>
              <MenuMoble>
                <MenuClose />
              </MenuMoble>
            </Button>
            <MobileContainer>
              <NavLinksMobile>
                <NavLinkMobile to='/' onClick={TurnMenu}>
                  Home
                </NavLinkMobile>
                <NavLinkMobile to='/timeline' onClick={TurnMenu}>
                  timeline
                </NavLinkMobile>
                <NavLinkMobile to='/lab' onClick={TurnMenu}>
                  Laboratory
                </NavLinkMobile>
                {
                  currentUser ? (
                    <SingIn onClick={signOutUser} >
                      Sing Out
                    </SingIn>)
                    :
                    (<SingIn to='/Auth' onClick={TurnMenu}>
                      Sing In
                    </SingIn>)
                }
              </NavLinksMobile>
            </MobileContainer>
          </>
      }
      <Outlet />
    </Fragment>
  )
}

export default Navigation