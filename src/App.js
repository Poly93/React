import './App.css';
import Navbar from './components/Navbar/navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';


function App(){
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Working for you.."}/>
    </div>
  );
}

export default App;
