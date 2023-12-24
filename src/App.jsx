import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import Auth from './pages/Auth'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
