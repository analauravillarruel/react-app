const products = [
  {
    id:1,
    name: "Trapiche Rojo",
    img: "https://i.ibb.co/x2vM4MX/gabriele-garanzelli-yq-Ak8-Nyq-N3-Y-unsplash.jpg",
    price: 4000,
    description: "Vino Malbec, fuerte",
    category: "Tinto",
    stock: 3
  },
  {
    id:2,
    name: "Blanca Mora",
    img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    price: 8000,
    description: "Vino blanco, suave",
    category: "Blanco",
    stock: 5
  },
  {
    id:3,
    name: "Regional Rosado",
    img: "https://images.unsplash.com/photo-1614208406223-5b78888e8b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80",
    price: 9000,
    description: "Vino rosado, moderado",
    category: "Rosado",
    stock: 7
  },
  {
    id:4,
    name: "Generacion XI",
    img: "https://images.unsplash.com/photo-1627260101457-21635a409ef3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJvdGVsbGElMjBkZSUyMHZpbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 4000,
    description: "Vino tinto, moderado",
    category: "Tinto",
    stock: 10
  },
  {
    id:5,
    name: "Tierra Nueva",
    img: "https://images.unsplash.com/photo-1568446129858-a1fe87f33d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJvdGVsbGElMjBkZSUyMHZpbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 2000,
    description: "Vino blanco, moderado",
    category: "Blanco",
    stock: 25
  },
  {
    id:6,
    name: "Oasis",
    img: "https://images.unsplash.com/photo-1588982766898-4a826e5ef631?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGJvdGVsbGElMjBkZSUyMHZpbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
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