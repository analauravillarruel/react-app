import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'



export const NavBar=()=> {
  return (
    <nav>
      <Link>

      </Link>
      <div>
        <NavLink to={`/category/Tinto`} activeClassName='active' className={styles.NavLink}>Trapiche Rojo</NavLink>
        <NavLink to={`/category/Blanco`} activeClassName='active' className={styles.NavLink}>Blanca Mora</NavLink>
        <NavLink to={`/category/Rosado`} activeClassName='active' className={styles.NavLink}>Regional Rosado</NavLink>
        <NavLink to={`/category/Tinto`} activeClassName='active' className={styles.NavLink}>Generacion XI</NavLink>
        <NavLink to={`/category/Blanco`} activeClassName='active' className={styles.NavLink}>Tierra Nueva</NavLink>
        <NavLink to={`/category/Rosado`} activeClassName='active' className={styles.NavLink}>Oasis</NavLink>
      </div>
      <CartWidget className={styles.CartWidget}/>
    </nav>
  )
}


