import React from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import About1 from './About1'
import Service from './Service'
import News from './News'
import Footer from './Footer'

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
      </div>
      <Home />
      <About1 />
      <Service />
      <News />
      <Footer />
    </div>
  )
}
