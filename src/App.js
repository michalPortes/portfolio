import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component.jsx'
import Home from './routes/home/home.component.jsx'
import Timeline from './routes/timeline/timeline.component.jsx'
import Lab from './routes/lab/lab.component.jsx'
import SingIn from './components/sing-in/sing-in.component.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="lab" element={<Lab />} />
        <Route path="Auth" element={<SingIn />} />
      </Route>
    </Routes>
  )
}

export default App
