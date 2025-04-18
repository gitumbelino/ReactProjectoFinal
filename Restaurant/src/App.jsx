import { useState } from 'react'
import LayoutMaster from './assets/layoutmaster/LayoutMaster.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorPage from './assets/errorpage/ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Signup from './assets/auth/Register.jsx'
import Login from './assets/auth/Login.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx';




const router = createBrowserRouter([
  {path: '/', 
    element: <LayoutMaster/>,
    errorElement: <ErrorPage/>,
    children:[
      {path: '/', element: <HomePage/>},
      {path: '/register', element: <Signup/>},
      {path: '/login', element: <Login/>},
    ]
  },
 
]);



function App() {
  const [count, setCount] = useState(0)
  
  return (

    <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>);


  }

export default App
