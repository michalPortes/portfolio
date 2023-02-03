import { Profile } from '../../utils'
import { useState, useEffect } from 'react'
import { ContainerImage, Img } from './git-image.styled'

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
    </ContainerImage>
  )
}


export default Image