import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import styles from "./NavBar.module.css";


export default function NavBar () {
  return (
    <div className={styles.navbar}>
        <p>Ecommerce</p>
        <p>Enlace 1</p>
        <p>Enlace 2</p>
        <p>Enlace 3</p>
        <p>Enlace 4</p>
        <CartWidget/>
    </div>
  )
}
