import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from "./Components/Header/Header";
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer';



import {CartContext, CartProvider} from './Components/Context/CartContext'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>}/>
          <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='cart/:img' element={<CartContext/>}/>
          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

