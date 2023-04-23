import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getProductsByCategory, getProducts} from "../../service/asyncMock";
import ItemList from "../ItemList/ItemList"

import {useParams} from 'react-router-dom'

export const ItemListContainer = ({greeting})=>{
  
  const [products,setProducts] = useState ([])
  const {categoryId} = useParams()

   useEffect(()=>{
    const asyncFunc= categoryId ? getProductsByCategory : getProducts;
    
    asyncFunc(categoryId)
    .then(response=>{
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    });
  },[catergoryId]);

  return(
    <div>
      <h1>{categoryId}</h1>
      <ItemList products={products}/>
    </div>
  )
}




