import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  cart:[]
})

export const CartProvider=({children})=>{
  const [cart,setCart]= useState([])
  console.log(cart)

  const addItem = (item,quantity)=>{
    if(isInCart(item.id)){
      setCart(prev=> [...prev, {...item,quantity}])
    }else {
      console.error ('El producto ya fue cargado')
    }
  }
  const removetItem = (itemId) => {
    const cartUpdate = cart.filter(prod => prod.id !==itemId)
    setCart(cartUpdate)
  }
  
  const clearCart = ()=>{
    setCart([])
  }
  const isInCart= (itemId)=>{
    return cart.some (prod=> prod.id === itemId)
  }
  return(
    <CartContext.Provider value ={{cart, addItem,removetItem,clearCart}}>
      {children}
    </CartContext.Provider>
  )
}