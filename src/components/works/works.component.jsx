import { JOBS } from '../../utils/github/utils'

import { ContainerWork, Lines, Date, Container, Title, Description, WorkTime, StepTitle } from './works.styled'


const Works = () => {

  return (
    <ContainerWork>
      {
        JOBS.map((item) => {
          return (
            <Lines key={item.id}>
              <Date>{item.year}</Date>
              <Container>
                <Title>
                  {item.title}
                </Title>
                <Description dangerouslySetInnerHTML={{ __html: item.description }} />
                <WorkTime>
                  <StepTitle>
                    Period:
                  </StepTitle>
                  {item.periodStart} - {item.periodEnd}
                </WorkTime>
              </Container>
            </Lines>
          )
        })
      }

    </ContainerWork>
  )
}


export default Works
