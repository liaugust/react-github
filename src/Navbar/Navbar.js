import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">
        Github Поиск
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className='nav-link'>Главная</a>
        </li>
        <li className="nav-item">
          <a href="/about" className='nav-link'>Информация</a>
        </li>
      </ul>
    </nav>
  )
}