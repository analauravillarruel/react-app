import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';
import CartContext from "../Context/CartContext";
import { CartWidget } from '../CartWidget/CartWidget';



export const Cart = () => {
  const {cart, clearCart, totalQuantity, total} = useContext(CartContext);
  if (totalQuantity ===0){
    return(
      <div>
        <h1 className="h1">No hay productos en el carrito</h1>
        <Link to='/' className="option">Productos</Link>
        <CartWidget/>
      </div>
    );
  }
  return(
    <div className="cart">
      {cart.map(p=> <CartItem key={p.id}{...p} />)}
      <h3 className="h2">Total:${total}</h3>
      <button onClick={()=> clearCart()} className="button">Vaciar carrito</button>
      <Link to='/checkout' className="option">Checkout</Link>
    </div>
  );
};

