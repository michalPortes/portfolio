import { useState, useEffect } from 'react'
import moment from 'moment'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { Repository } from '../../utils/github/utils'


import { Container, Title, ContainerProjects, Project, Link, Name, SecondContainer, Languages, DataCreate, ButtonContainer, Button } from './git-repositories.styled'

const GitRepositories = () => {

  const [list, setList] = useState([])
  const [showMore, SetShowMore] = useState(true)


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

          showMore
            ?
            list.map((item, index) => {
              if (index <= 3) {
                return (
                  <Link key={index} href={item.html_url} target="_blank">
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
              }
            })
            :
            list.map((item, index) => {
              return (
                <Link key={index} href={item.html_url} target="_blank">
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
      <ButtonContainer>

        <Button onClick={() => { SetShowMore(!showMore) }}>
          {showMore ?
            <IoIosArrowDown />
            :
            <IoIosArrowUp />
          }
        </Button>
      </ButtonContainer>
    </Container>
  )
}
export default GitRepositories