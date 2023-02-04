import { useState, useEffect } from 'react'
import moment from 'moment'

import { Repository } from '../../utils'


import { Container, Title, ContainerProjects, Project, Name, SecondContainer, Languages, DataCreate } from './git-repositories.styled'

const GitRepositories = () => {

  const [list, setList] = useState([])
  const [datas, setDatas] = useState([])

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
              <Project key={index}>
                <Name src={item.url}>{item.name}</Name>
                <SecondContainer>
                  <Languages>{item.language}</Languages>
                  <DataCreate>create: {moment(item.created_at).format('MM-DD-YYYY')}
                  </DataCreate>
                </SecondContainer>
              </Project>
            )
          })
        }
      </ContainerProjects>
    </Container>
  )
}
export default GitRepositories