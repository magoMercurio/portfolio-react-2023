import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from '../../Components/AppRoutes'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import ScrollUpButton from '../../Components/ScrollUpButton'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <Footer />
        <ScrollUpButton />
      </BrowserRouter>
    </>
  )
}

export default App
