import logo from "../../assets/logo.png";
import './navbar.css';
import '../Cartwidget/cartWidget'
import Cartwidget from "../Cartwidget/cartWidget";
import { Link } from 'react-router-dom';


function Navbar(){
    return(
      <div>
        <header>
        <Link to={'/'} ><img id="logo" src={logo} alt="logo" /></Link>  
          <nav className="navegador">        
              <ul id="lista">
                <Link to={'/category/productos'}><button className="btn btn-outline-secondary">Productos</button></Link>
                <Link to={'/category/servicios'}><button className="btn btn-outline-secondary">Servicios</button></Link>
                <Link to={'/category/contacto'}><button className="btn btn-outline-secondary">Contacto</button></Link>
                <button className="btn btn-outline-secondary"><Cartwidget/></button> 
              </ul>
          </nav>
        </header>  
      </div>
    );
}

export default Navbar;



