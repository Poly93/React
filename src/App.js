import './App.css';
import Navbar from './components/Navbar/navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'
import { Cart } from './components/Cart/Cart.jsx'



function App(){
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Nuestros Productos'}></ItemListContainer>}/>
            <Route path='/category/:category' element={<ItemListContainer greeting={'Nuestros Productos'}/>}/>
            <Route path='/contact' element={<h1 style={{ fontSize: 50, marginLeft: 1000}}>CONTACT</h1>} />
            <Route path='/details/:productId' element={<ItemDetailContainer />}/>
            <Route path='/Cart' element={<Cart />} />
            <Route path='*' element= { <h1 style={{ fontSize: 300, marginLeft: 700}}>404 NOT FOUND</h1> } />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
