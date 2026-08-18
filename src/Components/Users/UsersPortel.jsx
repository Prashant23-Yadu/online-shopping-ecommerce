import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Products from '../Product'
import ViewMore from '../ViewMore'
import Users from '../Admin/User'
import Navbar from '../Navbar'
import CartItems from './CartItems'


const UsersPortel = () => {
  return (
    <>
       <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Products/>} path='/products'/>
         
          <Route element={<ViewMore/>} path='/viewmore/:id' />
         
          <Route element={<Users/>} path='/getAllUsers'/>
           <Route element={<CartItems/>} path='/cartitems'/>
        </Routes>


    </>
  )
}

export default UsersPortel