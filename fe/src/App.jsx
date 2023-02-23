import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import HomePage from './pages/Home'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import ConfirmPage from './pages/Confirm'
import ForgotPage from './pages/Forgot'
import ResetPage from './pages/ResetPage'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'signup',
          element: <SignupPage />
        },
        {
          path: 'login',
          element: <LoginPage/>
        },
        {
          path: 'confirm',
          element: <ConfirmPage/>
        },
        {
          path: 'forgot',
          element: <ForgotPage/>
        },
        {
          path: 'reset',
          element: <ResetPage/>
        }
      ]
    }
  ])
  

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App
