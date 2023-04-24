const products = [
  {
    id:1,
    name: "Trapiche Rojo",
    image: "https://picsum.photos/200/300",
    price: 4000,
    description: "Vino Malbec, fuerte",
    category: "Tinto",
    stock: 3
  },
  {
    id:2,
    name: "Blanca Mora",
    image: "https://picsum.photos/200/300",
    price: 8000,
    description: "Vino blanco, suave",
    category: "Blanco",
    stock: 5
  },
  {
    id:3,
    name: "Regional Rosado",
    image: "https://picsum.photos/200/300",
    price: 9000,
    description: "Vino rosado, moderado",
    category: "Rosado",
    stock: 7
  },
  {
    id:4,
    name: "Generacion XI",
    image: "https://picsum.photos/200/300",
    price: 4000,
    description: "Vino tinto, moderado",
    category: "Tinto",
    stock: 10
  },
  {
    id:5,
    name: "Tierra Nueva",
    image: "https://picsum.photos/200/300",
    price: 2000,
    description: "Vino blanco, moderado",
    category: "Blanco",
    stock: 25
  },
  {
    id:6,
    name: "Oasis",
    image: "https://picsum.photos/200/300",
    price: 4000,
    description: "Vino Rosado, suave",
    category: "Rosado",
    stock: 7
  },
]

export const getProducts = () => {
  return new Promise ((resolve)=> {
    setTimeout(()=>{
      resolve(products)
    }, 500)
  })
}
export const getProductById = (productId) => {
  return new Promise ((resolve)=> {
    setTimeout(()=> {
      resolve (products.find(prod => prod.id === productId))
    }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve (products.filter(prod => prod.category === categoryId))
    }, 500)
  })
}