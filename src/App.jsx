import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/homepage' element={<HomePage />}/>
      </Routes>
      {/* <Login /> */}
    </>
  )
}

export default App
