import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from "./Components/Header/Header";
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from "./Components/Cart/Cart";


import {CartProvider} from './Components/Context/CartContext'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path='/category/:categoryId' element={<ItenListContainer greeting={'Productos por categoria'}/>}/>
          <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='cart/:img' element={<Cart/>}/>
          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

