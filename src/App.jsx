import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

import { Provider } from "react-redux"
import store from "./redux/store"

import LAYOUT from './pages/LAYOUT'

import CLIENTLAYOUT from './pages/client/CLIENTLAYOUT'
import DASHBOARDLAYOUT from './pages/dashboard/DASHBOARDLAYOUT'

import Home from './pages/client/Home'
import About from './pages/client/About'
import Dishes from './pages/client/Dishes'
import Rooms from './pages/client/Rooms'
import User from './pages/client/User'
import Blog from './pages/client/Blog'
import Contact from './pages/client/Contact'
import Privacy from './pages/client/Privacy'
import Terms from './pages/client/Terms'

import DashLogin from './pages/dashboard/dashboardAuth/DashLogin'
import DashRegister from './pages/dashboard/dashboardAuth/DashRegister'
import DashForgotPass from './pages/dashboard/dashboardAuth/DashForgotPass'


import Dashboard from './pages/dashboard/Dashboard'
import Blogs from './pages/dashboard/Blogs'
import Protected from './component/dashboard/Protected'
import RestaurantMenu from './component/client/RestaurantMenu'

import { HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LAYOUT />,
    children: [
      {
        element: <CLIENTLAYOUT />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "dishes",
            element: <Dishes />
          },
          {
            path: "rooms",
            element: <Rooms />
          },
          {
            path: "blog",
            element: <Blog />
          },
          {
            path: "contact",
            element: <Contact />
          },
          {
            path: "user",
            element: <User />
          },
          {
            path: "privacy",
            element: <Privacy />
          },
          {
            path: "terms",
            element: <Terms />
          }
        ]
      },
      {
        path: "dashboard",
        element: (
          <Protected>
            <DASHBOARDLAYOUT />
          </Protected>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: 'blogs/all',
            element: <Blogs />
          },
          {
            path: 'blogs/create',
            element: <h1>Blog Create</h1>
          },
          {
            path: 'dishes/all',
            element: <h1>Dishes All</h1>
          },
          {
            path: 'dishes/create',
            element: <h1>Dishes Create</h1>
          },
          {
            path: 'rooms/all',
            element: <h1>Rooms all</h1>
          },
          {
            path: 'rooms/create',
            element: <h1>Rooms Create</h1>
          },
          {
            path: 'users',
            element: <h1>Users</h1>
          },
        ]
      },
      {
        path: "dashboard-auth/login",
        element: <DashLogin />
      },
      {
        path: "dashboard-auth/register",
        element: <DashRegister />
      },
      {
        path: "dashboard-auth/forgot-password",
        element: <DashForgotPass />
      },
      {
        path: "restaurant-menu",
        element: <RestaurantMenu />
      }
    ]
  }
])

const App = () => {
  const helmetContext = {};
  return (
    <Provider store={store}>
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  )
}

export default App

