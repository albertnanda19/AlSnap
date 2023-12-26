import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import Auth from './pages/Auth'
import PageLayout from './layout/PageLayout'
import Profile from './pages/Profile'
import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/firebase'

function App() {

  const [authUser] = useAuthState(auth);

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/auth"} />} />
        <Route path="/auth" element={!authUser ? <Auth /> : <Navigate to={"/"} />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </PageLayout>
  )
}

export default App
