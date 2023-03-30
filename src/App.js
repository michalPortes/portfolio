import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component.jsx'
import Home from './routes/home/home.component.jsx'
import Timeline from './routes/timeline/timeline.component.jsx'
import Lab from './routes/lab/lab.component.jsx'
import Auth from './routes/authentication/authentication.component'
import CreateUser from './routes/create-user/create-user.component'
import { UserContext } from './context/user.context.jsx'

const App = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="lab" element={<Lab />} />
        {/* 
        {currentUser ? ( */}
        <Route path="Auth" element={<Auth />} />
        {/* // ) : (
        //   <Route index element={<Home />} />
        // )} */}
        <Route path="Create" element={<CreateUser />} />
      </Route>
    </Routes>
  )
}

export default App
