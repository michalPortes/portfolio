import { Fragment, useEffect, useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Profile } from '../../utils'

import { MobileContext } from '../../context/mobile.context'


import { NavigationConteiner, LogoContainer, Text, Span, NavLinks, NavLink, MenuMoble, OpenMenu, MenuClose, Button, NavLinksMobile, NavLinkMobile } from './navigation.styled'


const Navigation = () => {

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
            </NavLinks>
            <Button onClick={TurnMenu}>
              <MenuMoble >
                <OpenMenu />
              </MenuMoble>
            </Button>
          </NavigationConteiner>
          :
          <>
            <NavLinksMobile>
              <Button onClick={TurnMenu} >
                <MenuClose />
              </Button>
              <NavLinkMobile to='/' onClick={TurnMenu}>
                Home
              </NavLinkMobile>
              <NavLinkMobile to='/timeline' onClick={TurnMenu}>
                timeline
              </NavLinkMobile>
              <NavLinkMobile to='/lab' onClick={TurnMenu}>
                Laboratory
              </NavLinkMobile>
            </NavLinksMobile>
          </>
      }
      <Outlet />
    </Fragment>
  )
}

export default Navigation