import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component.jsx'
import Home from './routes/home/home.component.jsx'
import Timeline from './routes/timeline/timeline.component.jsx'
import Lab from './routes/lab/lab.component.jsx'
import Auth from './routes/authentication/authentication.component'
import CreateUser from './routes/create-user/create-user.component'
import SendEmail from './components/send-email/send-email.component.jsx'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route exact index element={<Home />} />
        <Route exact path="/timeline" element={<Timeline />} />
        <Route exact path="/sendemail" element={<SendEmail />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/auth/create" element={<CreateUser />} />
      </Route>
    </Routes>
  )
}

export default App
