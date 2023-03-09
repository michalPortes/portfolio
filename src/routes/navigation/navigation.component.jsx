import { Fragment, useEffect, useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Profile } from '../../utils'

import { MobileContext } from '../../context/mobile.context'

import MenuMobile from './navigation.mobile.component'


import { NavigationConteiner, LogoContainer, Text, Span, NavLinks, NavLink, MenuMoble, OpenMenu, MenuClose, Button } from './navigation.styled'


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
  console.log(showMenu)

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
            <Button onClick={TurnMenu}>
              <MenuMoble>
                <MenuClose />
              </MenuMoble>
            </Button>
            <MenuMobile />
          </>
      }
      <Outlet />
    </Fragment>
  )
}

export default Navigation