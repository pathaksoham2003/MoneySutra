import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './Home'
import WhatWeDo from './Home/WhatWeDo.jsx'
import Contact from './Home/Contact'
import Footer from './components/Footer'
import './index.css'
import Hero from './Home/Hero.jsx/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen'>
      <Navbar/>
      <Hero/>
      <WhatWeDo/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
