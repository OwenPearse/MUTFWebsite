import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const logoUrl = import.meta.env.BASE_URL + 'logo.png'
  return (
    <div className="brand-and-nav">
      <div className="nav-left">
        <img className="logo" src={logoUrl} alt="MUTF logo" />
      </div>

      <div className="nav-center">
        <div className="brand-text site-title">Melbourne University Touch Football</div>
      </div>

      <nav className="nav nav-right">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          About
        </NavLink>
        <NavLink to="/fixtures" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Fixtures
        </NavLink>
      </nav>
    </div>
  )
} 