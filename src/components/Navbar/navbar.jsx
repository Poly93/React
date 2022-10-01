import logo from "../../assets/logo.png";
import './navbar.css';
import '../cartWidget/cartWidget'
import cartWidget from "../cartWidget/cartWidget";


export default function Navbar(){
    return (
      <div className="App">
        <header className="App-header">
        <img id="logo" src={logo} alt="logo" />  
          <nav className="navegador">
            <span><cartWidget/></span>        
              <ul id="lista">
                <button>Aceites</button>
                <button>Filtros de Aceite</button>
                <button>Filtro de Aire</button> 
              </ul>
          </nav>
        </header>  
      </div>
    );
}

  



