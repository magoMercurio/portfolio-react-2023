import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from '../../Components/AppRoutes'
import NavBar from '../../Components/NavBar'



function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />

      </BrowserRouter>
    </>
  )
}

export default App
