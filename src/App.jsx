import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppLinkButtons from './components/AppLinkButtons'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen min-w-screen mx-auto bg-[#06040a]'>  
    {/* bg-[#06040a] */}
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <Footer/>

      {/* <AppLinkButtons/> */}
    </div>
  )
}

export default App
