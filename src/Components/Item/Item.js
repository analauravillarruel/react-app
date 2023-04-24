import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Item.module.css'

const Item = ({id,name,img,price,stock,})=>{
  return(
    <article className={styles.item}>
      <header className={styles.header}>
        <h2 className={styles.itemheader}>{name}</h2>
        <picture>
          <img src={img} alt={name} className={styles.itemimg}/>
        </picture>
        <section>
          <p className={styles.info}>
            Precio: ${price}
          </p>

          <p className={styles.info}>
            Stock:{stock}
          </p>

        </section>
        <footer className={styles.ItemFooter}>
          <Link to={`/item/${id}`} className={styles.option}> Ver detalles</Link>
        </footer>
      </header>
    </article>
  )
}
export default Item

