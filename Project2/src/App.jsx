import React from 'react'
import Login from './Pages/Login/Login'

import Register from './Pages/Register/Register'
import Navbar from './components/NavBar/Navbar'
import Leftbar from './components/LeftBar/Leftbar'
import Rightbar from './components/RightBar/Rightbar'
import Home from './Pages/Home/Home.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import "./style.scss"

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useContext } from 'react'
import { DarkmodeContext } from './context/Context.jsx'
import { AuthContext } from './context/Authcontext.jsx'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'





const App = () => {
  const { darkMode } = useContext(DarkmodeContext);
  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient()
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>

        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <Leftbar />

            <div style={{
              flex: 7
            }}>
              <Outlet />
            </div>

            <Rightbar />
          </div>
        </div>
      </QueryClientProvider>
    );
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Profile/:id",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
  ]);




  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;