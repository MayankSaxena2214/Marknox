import React from 'react'
import { HashRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Socials from './components/Socials/Socials'
import Layout from './components/Layout/Layout'
import "./App.css"
const App = () => {
  return (
    <div className="app-container">
    <HashRouter>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          
        </Routes>
    </HashRouter>
    </div>
  )
}

export default App