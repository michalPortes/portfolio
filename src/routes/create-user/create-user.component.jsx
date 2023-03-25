import { useContext } from 'react'

import { MobileContext } from '../../context/mobile.context'
import SingUp from '../../components/sing-up/sing-up.component'

const CreateUser = () => {

  const { showMenu } = useContext(MobileContext)

  return (
    <>
      {
        showMenu ?
          <div>
            <SingUp />
          </div>
          :
          <>
          </>
      }
    </>
  )
}


export default CreateUser