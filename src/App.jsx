import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages1/Home'
import Landing from './pages1/Landing'
import History from './pages1/History'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages1/Login'
import Register from './pages1/Register'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/his' element={<History/>}/>
      <Route path='/log' element={<Login/>}/>
      <Route path='/reg' element={<Register/>}/>
    </Routes>
    <Footer/>
    <ToastContainer />
    </>
  )
}

export default App
