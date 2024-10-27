import React from 'react'
import Headers from './components/Headers'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
import Cubic from './assets/Cubic';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
function App() {
  return (
    <div>
      <Headers/>
      <div className="app-container">
      <Sidebar />
     <Outlet/>
    </div>
      <Footer/>
    </div>
  )
}

export default App

