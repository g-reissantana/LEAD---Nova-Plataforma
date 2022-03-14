import { useRoutes } from 'react-router-dom'

import { Home } from '../pages/home'

export const MainRoutes = () => useRoutes([
    {path: '/',element: <Home/>},
    {path: '/login',element: 'Página de Login'},
    {path: '*',element: 'Página não encontrada'},
])