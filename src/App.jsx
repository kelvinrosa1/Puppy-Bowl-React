// import { useState } from 'react'
import './App.css'
import AllPlayers from './Components/Allplayers'
import SinglePlayer from './Components/SinglePlayer'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer/>}/>
    </Routes>

    </>
  )
}

export default App
