
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Trip from './components/Trip'
import React, { Component } from 'react'

 export default function App() {
  return (

    <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/Trip' element={<Trip/>} />
        {/* <Route path='/product/:id' element={<ProductDetail />} /> */}
        {/* <Route path='/addProduct' element ={<AddProduct/>}/> */}
      </Routes>
    </main>
   
         
  );
}



