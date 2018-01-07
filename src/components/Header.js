import React from 'react'
import style from './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={style.Header}>
      <Link to="/">
        <h1>Lakeland Community Heritage Project</h1>
      </Link>
      <hr />
    </header>
  )
}

export default Header
