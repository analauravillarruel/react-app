import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom'

// import styles from "./NavBar.module.css";



function NavBar() {
  return (
    <nav>
      <link>

      </link>
      <div>
        <NavLink to={`/category/Tinto`} activeClassName='active' className={style.NavLink}>Trapiche Rojo</NavLink>
        <NavLink to={`/category/Blanco`} activeClassName='active' className={style.NavLink}>Blanca Mora</NavLink>
        <NavLink to={`/category/Rosado`} activeClassName='active' className={style.NavLink}>Regional Rosado</NavLink>
        <NavLink to={`/category/Tinto`} activeClassName='active' className={style.NavLink}>Generacion XI</NavLink>
        <NavLink to={`/category/Blanco`} activeClassName='active' className={style.NavLink}>Tierra Nueva</NavLink>
        <NavLink to={`/category/Rosado`} activeClassName='active' className={style.NavLink}>Oasis</NavLink>
      </div>
      <CartWidget className={style.CartWidget}/>
    </nav>
  )
}


