import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import AppRoutes from './components/AppRoutes'
import './App.css'

function App() {

  return (
    <Router>
      <div className='app'>
        Reacted Rails App
        <p>Find this application layout in client/src/App.jsx</p>
      </div>
      <NavBar />
      <AppRoutes />
    </Router>
  )
}

export default App
