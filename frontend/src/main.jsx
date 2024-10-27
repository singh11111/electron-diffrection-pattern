import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Cubic from './assets/Cubic.jsx'
import Triclinic from './assets/Triclinic.jsx'
import Tetragonal from './assets/Tetragonal.jsx'
import Hexagonal from './assets/Hexagonal.jsx'
import Trigonal from './assets/Trigonal.jsx'
import Orthorhombic from './assets/Orthorhombic.jsx'
import Monoclinic from './assets/Monoclinic.jsx'
import BCubic from './methode/BCubic.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import {Provider} from 'react-redux'
const router=createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/Cubic',element:<Cubic/>},
      {path:'/Tetragonal',element:<Tetragonal/>},
      {path:'/Hexagonal',element:<Hexagonal/>},
      {path:'/Trigonal',element:<Trigonal/>},
      {path:'/Orthorhombic',element:<Orthorhombic/>},
      {path:'/Monoclinic',element:<Monoclinic/>},
      {path:'/Triclinic',element:<Triclinic/>},
      {path:'/BCubic',element:<BCubic/>},
      {path:'/Login',element:<Login/>},
      {path:'/SignUp',element:<SignUp/>},
    
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
