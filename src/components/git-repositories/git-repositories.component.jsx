import { useState, useEffect } from 'react'
import moment from 'moment'

import { Repository } from '../../utils'


import { Container, Title, ContainerProjects, Project, Link, Name, SecondContainer, Languages, DataCreate } from './git-repositories.styled'

const GitRepositories = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    Repository()
      .then(resp => {

        const sortArr = [...resp.data];

        sortArr.sort((a, b) => {
          return b.created_at.localeCompare(a.created_at)
        })
        setList(sortArr)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <Container>
      <Title>Projects in GitHub</Title>
      <ContainerProjects>
        {
          list.map((item, index) => {
            return (
              <Link href={item.html_url} target="_blank">
                <Project key={index}>
                  <Name >{item.name}</Name>
                  <SecondContainer>
                    <Languages>{item.language}</Languages>
                    <DataCreate>create: {moment(item.created_at).format('MM-DD-YYYY')}
                    </DataCreate>
                  </SecondContainer>
                </Project>
              </Link>
            )
          })
        }
      </ContainerProjects>
    </Container>
  )
}
export default GitRepositories