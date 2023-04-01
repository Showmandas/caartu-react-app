import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import AboutUs from './components/About/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
     <Header/>
     <Slider/>
     <AboutUs/>
    </div>
  )
}

export default App
