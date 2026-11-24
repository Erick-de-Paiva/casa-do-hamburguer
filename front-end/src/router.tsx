import { createBrowserRouter, Outlet } from 'react-router' 
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Header from './components/Header'
import Pedidos from './pages/Pedidos'
import PublicRoute from './components/PublicRoute'

const Layout = () => {
    return (
        <div className={`
            flex flex-col min-h-screen 
            bg-[#161410]
        `}>
            <Header />
            <Outlet />
        </div>
    )
}

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/pedidos",
                element: <Pedidos />
            }
        ] 
    },
    {
        path: "/login",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        )
    },
    {
        path: "/register",
        element: (
            <PublicRoute>
                <Register />
            </PublicRoute>
        )    
    }
]) 
