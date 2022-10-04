import logo from "../../assets/logo.png";
import './navbar.css';
import '../Cartwidget/Cartwidget'
import Cartwidget from "../Cartwidget/Cartwidget";


export default function Navbar(){
    return(
      <div className="App">
        <header>
        <img id="logo" src={logo} alt="logo" />  
          <nav className="navegador">
              <ul id="lista">
                <button><Cartwidget/></button>
                <button>Aceites</button>
                <button>Filtros de Aceite</button>
                <button>Filtro de Aire</button> 
              </ul>
          </nav>
        </header>  
      </div>
    );
}

  



