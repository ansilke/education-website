import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home1 from '../pages/home1'
import Header from '../components/header'
import Comp1 from '../components/Comp1'
import Comp2 from '../components/comp2'
import Comp3 from '../components/comp3'
import Comp4 from '../components/Comp4'
import Footer from '../components/Footer'

function Layoutroutes() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/Home" element={<Home1/>} />
        <Route path="/Servises" element={<Comp4/>} />
        <Route path="/Courses" element={<Comp2/>} />
        <Route path="/AboutUs" element={<Comp3/>} />
        {/* <Route path="/Feedbacks" element={<Comp4/>} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Layoutroutes
