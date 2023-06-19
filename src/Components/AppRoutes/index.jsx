import { useRoutes } from 'react-router-dom'

import Home from '../../Pages/Home'
import Proyectos from '../../Pages/Proyectos'



const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    {path:'/proyectos', element: <Proyectos /> },
  ])
  return routes
}

export default AppRoutes