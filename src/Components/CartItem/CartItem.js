import React from "react";

const CartItem = ({id, name, quantity, price}) =>{
  return(
    <div className="cart-item">
      <div className="item-info">
        <h3>{name}</h3>
        <p>Precio:${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <div className="item-actions">
        <button className="button">Eliminar</button>
      </div>
    </div>
  );
};
export default CartItem;
