import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './Home'
import WhatWeDo from './Home/WhatWeDo.jsx'
import Contact from './Home/Contact'
import Footer from './components/Footer'
import './index.css'
import Hero from './Home/Hero.jsx/index.jsx'
import Testimonials from './Home/Testimonials/index.jsx'
import Counting from './Home/Counting/index.jsx'
import InfiniteTextStrip from './components/InfiniteStrip/index.jsx'

function App() {
  
  return (
    <div className='w-full min-h-screen'>
      <InfiniteTextStrip/>
      <Navbar/>
      <Hero/>
      <WhatWeDo/>
      <Counting/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
