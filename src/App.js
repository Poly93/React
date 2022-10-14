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
          <Route path='/category/:category' element={<ItemListContainer greeting={'Nuestros Productos'}/>}/>
          <Route path='/' element={<ItemListContainer greeting={'Nuestros Productos'}></ItemListContainer>}/>
          <Route path='/details/:productId' element={<ItemDetailContainer />}/>
          <Route path='*' element= { <h1 style={{ fontSize: 300, marginLeft: 700}}>404 NOT FOUND</h1> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
