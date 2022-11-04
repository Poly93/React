import logo from "../../assets/logo.png";
import './navbar.css';
import '../Cartwidget/cartWidget'
import Cartwidget from "../Cartwidget/cartWidget";
import { Link } from 'react-router-dom';


function Navbar(){
    return(
      <div>
        <header className="banner_logo">
        <Link to={'/'}><img id='imgBannerLogo' src={logo} alt="logo" /></Link>
        </header>    
          <nav className="navegador">        
              <ul id="lista">
                <Link to={'/category/Productos'}><button id='btnNavbar' className="btn btn-outline-secondary ">Productos</button></Link>
                <Link to={'/category/Servicios'}><button id='btnNavbar' className="btn btn-outline-secondary">Servicios</button></Link>
                <Link to={'/Cart'}><button id='btnNavbar' className="btn btn-outline-secondary"><Cartwidget/></button></Link> 
              </ul>
          </nav>
        
      </div>
    );
}

export default Navbar;



