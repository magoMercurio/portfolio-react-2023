import { useRoutes } from 'react-router-dom'

import Home from '../../Pages/Home'
import Proyectos from '../../Pages/Proyectos'
import Contacto from '../../Pages/Contacto'
import NotFound from '../../Pages/NotFound'





const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    {path:'/proyectos', element: <Proyectos /> },
    {path:'/contacto', element: <Contacto /> },
    {path: '*', element: <NotFound /> }

  ])
  return routes
}

export default AppRoutes