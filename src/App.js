import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component.jsx'
import Home from './routes/home/home.component.jsx'
import Timeline from './routes/timeline/timeline.component.jsx'
import Lab from './routes/lab/lab.component.jsx'
import Auth from './routes/authentication/authentication.component'
import CreateUser from './routes/create-user/create-user.component'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="lab" element={<Lab />} />
        <Route path="Auth" element={<Auth />} />
        <Route path="Create" element={<CreateUser />} />
      </Route>
    </Routes>
  )
}

export default App
