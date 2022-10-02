import logo from "../../assets/logo.png";
import './navbar.css';
import '../CartWidget/Cartwidget'
import Cartwidget from "../CartWidget/Cartwidget";


export default function Navbar(){
    return(
      <div className="App">
        <header className="App-header">
        <img id="logo" src={logo} alt="logo" />  
          <nav className="navegador">
            <span><Cartwidget/></span>        
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

  



