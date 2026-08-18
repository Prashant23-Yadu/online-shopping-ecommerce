import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
// import AdminPortel from './Components/Admin/AdminPortel'
import AdminPortel from './Components/Admin/AdminPortel'
import { ToastContainer } from 'react-bootstrap'
import UsersPortel from './Components/Users/UsersPortel'
import ForgotPassword from './Components/Users/ForgotPassword'
import Register from './Components/Users/Register'

// import 'bootstrap/dist/css/bootstrap.min.css';

// npx json-server src/jsondata/appdata.json --port 4000



const App = () => {

  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route element={<LandingPage/>} path='/'/>
      <Route element={<AdminPortel/>} path='/adminportel/*' />
      <Route element={<UsersPortel/>} path='/userportel/*'/>
      <Route element={<ForgotPassword />} path='/forgot-password' />
       <Route element={<Register />}path="/register"/>
    </Routes>
    </>
  )
}

export default App