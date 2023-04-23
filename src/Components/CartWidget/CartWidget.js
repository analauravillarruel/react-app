import React from 'react'
import { IoMdCart } from "react-icons/io";
import styles from "./CartWidget.module.css";

export const CartWidget = () => {
  return (
    <div className={styles.cartwidget}>
      <IoMdCart className={styles.iconcart}/>
      <p>0</p>
    </div>
  )
}
