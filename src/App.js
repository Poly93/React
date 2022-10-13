import './App.css';
import Navbar from './components/Navbar/navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/category/:category'element={<ItemListContainer/>}/>
            <Route path='/' element={<ItemListContainer greeting={"Nuestros Productos"}></ItemListContainer>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
