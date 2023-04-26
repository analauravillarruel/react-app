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
        <NavLink to={`/category/Tinto`} activeClassName='active' className={styles.NavLink}>Tinto</NavLink>
        <NavLink to={`/category/Blanco`} activeClassName='active' className={styles.NavLink}>Blanco</NavLink>
        <NavLink to={`/category/Rosado`} activeClassName='active' className={styles.NavLink}>Rosado</NavLink>
      </div>
      <CartWidget className={styles.CartWidget}/>
    </nav>
  )
}


