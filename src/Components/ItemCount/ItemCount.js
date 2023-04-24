import { useState } from "react";
import styles from './ItemCount.module.css'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  const decrement = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className={styles.Count}>
      <div className={styles.Controls}>
        <button className={styles.Button} onClick={decrement}>-</button>
        <span className={styles.quantity}>{quantity}</span>
        <button onClick={increment}>+</button>
        <button className={styles.Button} onClick={() => onAdd(quantity)} disable={!stock}>Agregar al carrito </button>
      </div>

    </div>
  )
}

export default ItemCount;
