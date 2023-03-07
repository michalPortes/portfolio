import { Fragment, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Profile } from '../../utils'



import { NavigationConteiner, LogoContainer, Text, Span, NavLinks, NavLink, MenuMoble, OpenMenu, MenuClose, Button } from './navigation.styled'


const Navigation = () => {

  const [showMenu, setShowMenu] = useState(false)

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
  return (
    <Fragment>
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
        <Button onClick={() => { setShowMenu(!showMenu) }}>
          {
            showMenu ?
              <MenuMoble >
                <OpenMenu />
              </MenuMoble>
              :
              <MenuMoble>
                <MenuClose />
              </MenuMoble>

          }

        </Button>
      </NavigationConteiner>
      <Outlet />
    </Fragment>
  )
}

export default Navigation