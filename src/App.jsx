import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import EmailValidation from './EmailValidation';
import { Route, Routes } from 'react-router-dom';
import History from './History';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<EmailValidation/>} />
        <Route path='/Email' element={<EmailValidation/>} />
        <Route path='/History' element={<History/>} />
      </Routes>
    </>
  )
}

export default App
