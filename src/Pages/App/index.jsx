import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from '../../Components/AppRoutes'
import NavBar from '../../Components/NavBar'



function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />

      </BrowserRouter>
    </>
  )
}

export default App
