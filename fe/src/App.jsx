import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import HomePage from './pages/Home'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'

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
        }
      ]
    }
  ])
  

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App
