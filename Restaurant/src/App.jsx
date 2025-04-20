import { useState } from 'react'
import LayoutMaster from './components/layoutmaster/LayoutMaster.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/errorpage/ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Signup from './pages/Signup.jsx'
import Login from './components/auth/Login.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx';
import AvailableDishes from './pages/MenuIndex.jsx'
import './App.css'
import Logout from './components/auth/Logout.jsx'


const router = createBrowserRouter([
  {path: '/', 
    element: <LayoutMaster/>,
    errorElement: <ErrorPage/>,
    children:[
      {path: '/home', element: <HomePage/>},
      {path: '/register', element: <Signup/>},
      {path: '/login', element: <Login/>},
      {path: '/menu', element: <AvailableDishes/>},
      {path: '/logout', element: <Logout/>}
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
