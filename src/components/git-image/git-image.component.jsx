import { Profile } from '../../utils/github/utils'
import { useState, useEffect } from 'react'
import { ContainerImage, Img, Office } from './git-image.styled'

const Image = () => {

  const [img, setImg] = useState([])


  useEffect(() => {
    Profile()
      .then((resp) => {
        setImg(resp.data)
      })
  })

  return (
    <ContainerImage>
      <Img src={img.avatar_url} />
      <Office>Software Developer</Office>
    </ContainerImage>
  )
}


export default Image