import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary px-3">
      <div className="navbar-brand">
        Github Поиск
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" exact className='nav-link'>Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className='nav-link'>Информация</NavLink>
        </li>
      </ul>
    </nav>
  )
}