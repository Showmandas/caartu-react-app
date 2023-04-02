import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import AboutUs from './components/About/AboutUs'
import Items from './components/Items/Items'
import Location from './components/Location/Location'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
     <Header/>
     <Slider/>
     <AboutUs/>
     <Items/>
     <Location/>
    </div>
  )
}

export default App
