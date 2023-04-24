import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom";
import styles from './ItemDetail.module.css'
import { CartProvider } from "../Context/CartContext";

function ItemDetail({ id, name, img, category, description, price, stock }) {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartProvider);

  const handledAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id, name, price
    };

    addItem(item, quantity);

  };

  return (
    <article className={styles.article}>
      <header>
        <h1>
          {id}
        </h1>
        <h2>
          {name}
        </h2>
      </header>
      <picture className={styles.picture - img}>
        <img src={img} alt={name} />
      </picture>
      <section className={styles.section}>
        <p>
          {category}
        </p>
        <p>
          {description}
        </p>
        <p>
          {price}
        </p>
        <p>
          {stock}
        </p>
      </section>
      <footer className={styles.footer}>
        {quantityAdded > 0 ? (
          <Link to='/cart'>Terminar mi compra</Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handledAdd} />
        )}
      </footer>
    </article>
  );
}

export default ItemDetail
