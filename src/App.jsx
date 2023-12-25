import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import Auth from './pages/Auth'
import PageLayout from './layout/PageLayout'
import Profile from './pages/Profile'

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </PageLayout>
  )
}

export default App
