import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './hooks/useAuthContext'
import ProtectedRoute from './components/ProtectedRoute.js';
import PublicRoute from './components/PublicRoute.js'

function App() {

  const { authIsReady} = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <>
          <NavBar />
          <Routes>
              <Route element={<ProtectedRoute />}>
                  <Route index element={<Home/>}/>
              </Route>
                <Route element={<PublicRoute />}>
                  <Route path='/login' element={<Login />}/>
                  <Route path='/signup' element={<Signup />}/>
                </Route>
            </Routes>
        </>
        )}
    </div>
  );
}

export default App
