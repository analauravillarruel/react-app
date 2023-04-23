import React from 'react'
import {NavBar} from "../NavBar/NavBar"
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Tinta Roja</h1>
      <NavBar/>
    </header>
  )
}
