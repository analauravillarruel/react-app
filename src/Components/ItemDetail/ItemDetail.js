import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom";

function ItemDetail({ id, name, img, category, description, price, stock }) {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handledAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id, name, price
    };

    addItem(item, quantity);

  };

  return (
    <article className={style.article}>
      <header>
        <h1>
          {id}
        </h1>
        <h2>
          {name}
        </h2>
      </header>
      <picture className={style.picture - img}>
        <img src={img} alt={name} />
      </picture>
      <section className={style.section}>
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
      <footer className={style.footer}>
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
