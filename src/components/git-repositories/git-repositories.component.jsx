import { useState, useEffect } from 'react'
import { Repository } from '../../utils'

import { Container, Title, ContainerProjects, Project, Name, Languages } from './git-repositories.styled'

const GitRepositories = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    Repository()
      .then(resp => {
        setList(resp.data)
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
              <Project key={index}>
                <Name src={item.url}>{item.name}</Name>
                <Languages>{item.language}</Languages>
              </Project>
            )
          })
        }
      </ContainerProjects>
    </Container>
  )
}
export default GitRepositories