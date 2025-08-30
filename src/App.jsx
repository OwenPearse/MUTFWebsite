import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Fixtures from './pages/Fixtures.jsx'

export default function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container nav-container">
          <Navbar />
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fixtures" element={<Fixtures />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  )
} 