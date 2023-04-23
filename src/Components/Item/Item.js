import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({id,name,img,price,stock,})=>{
  return(
    <article className={style.item}>
      <header className={style.header}>
        <h2 className={style.itemheader}>{name}</h2>
        <picture>
          <img src={img} alt={name} className={style.itemimg}/>
        </picture>
        <section>
          <p className={style.info}>
            Precio: ${price}
          </p>

          <p className={style.info}>
            Stock:{stock}
          </p>

        </section>
        <footer className={style.ItemFooter}>
          <Link to={`/item/${id}`} className={style.option}> Ver detalles</Link>
        </footer>
      </header>
    </article>
  )
}
export default Item

