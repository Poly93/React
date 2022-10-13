import logo from "../../assets/logo.png";
import './navbar.css';
import '../Cartwidget/cartWidget'
import Cartwidget from "../Cartwidget/cartWidget";


export default function Navbar(){
    return(
      <div>
        <header>
        <img id="logo" src={logo} alt="logo" />  
          <nav className="navegador">        
              <ul id="lista">
                <button className="btn btn-outline-secondary"><Cartwidget/></button>
                <button className="btn btn-outline-secondary">Aceites</button>
                <button className="btn btn-outline-secondary">Filtros de Aceite</button>
                <button className="btn btn-outline-secondary">Filtro de Aire</button> 
              </ul>
          </nav>
        </header>  
      </div>
    );
}

  



