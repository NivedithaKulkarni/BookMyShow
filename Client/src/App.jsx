import { AudioMutedOutlined } from '@ant-design/icons'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './Pages/Home'
import Login from './Pages/login'
import Register from './Pages/register'
import Admin from './Pages/admin'
import  Partner from './Pages/partner'
import User from './Pages/user'
import SingleMovie from './Pages/SingleMovie'
import BookShow from './Pages/BookShow'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={  <Register />}/>
          <Route path='/login' element={   <Login />}/>
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='/admin' element={   <ProtectedRoute><Admin/></ProtectedRoute>}/>
          <Route path='/partner' element={   <ProtectedRoute><Partner/></ProtectedRoute>}/>
          <Route path='/user' element={   <ProtectedRoute><User/></ProtectedRoute>}/>
          <Route path="/movie/:id" element={<ProtectedRoute><SingleMovie/></ProtectedRoute>} />
          <Route path="/book-show/:id" element={<ProtectedRoute><BookShow/></ProtectedRoute>} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      
      
  </>
  )
}

export default App
