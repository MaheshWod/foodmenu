import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
const App = () => {
  return (
<>
<BrowserRouter>
  <Routes>
    <Route path='/navbar'  element = {<Navbar/>}/>
    <Route path='/' element = {<Home/>}/>
  </Routes>
</BrowserRouter>
</>  )
}

export default App