import { useState } from "react";

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
    <div className={style.Counter}>
      <div className={style.Controls}>
        <button className={style.Button} onClick={decremnt}>-</button>
        <span className={stye.quantity}>{quantity}</span>
        <button onClick={increment}>+</button>
        <button className={style.Button} onClick={() => onAdd(quantity)} disable={!stock}>Agregar al carrito </button>
      </div>

    </div>
  )
}

export default ItemCount;
