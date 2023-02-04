import { Fragment, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Profile } from '../../utils'

import { NavigationConteiner, LogoContainer, Text, Span, NavLinks, NavLink } from './navigation.styled'


const Navigation = () => {

  const [name, setName] = useState('')
  useEffect(() => {
    Profile()
      .then(resp => {
        setName(resp.data.name)
      })
      .catch(resp => resp)
      .finally(resp => resp)
  }, [])


  return (
    <Fragment>
      <NavigationConteiner>
        <LogoContainer to='/'>
          <Text>
            &lt; <Span>{name}</Span> &frasl;&gt;
          </Text>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/home'>
            timeline
          </NavLink>
          <NavLink to='/home'>
            Aboult
          </NavLink>
        </NavLinks>
      </NavigationConteiner>
      <Outlet />
    </Fragment>
  )
}

export default Navigation