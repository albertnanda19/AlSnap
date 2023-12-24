import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import Auth from './pages/Auth'
import PageLayout from './layout/PageLayout'

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </PageLayout>
  )
}

export default App
