import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import RoutesApp from './Routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  )
}

export default App
