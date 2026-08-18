import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Product from '../Product'

import ViewMore from '../ViewMore'

import AddUsers from './AddUsers'
import AddProduct from './AddProduct'
import Users from './User'


const AdminPortel = () => {
  return (
    <>
        
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Product/>} path='/products'/>
          <Route element={<AddProduct/>} path='/add-product'/>
          <Route element={<ViewMore/>} path='/viewmore/:id' />
          <Route element={<AddUsers/>} path='/addusers'/>
          <Route element={<Users/>} path='/getAllUsers'/>
        </Routes>

    </>
  )
}

export default AdminPortel