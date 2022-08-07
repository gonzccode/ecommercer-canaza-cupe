import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './NavBar.css'

function NavBar(){
    return (
        <nav>
            <div class="nav-wrapper">
                <img src="https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg" className="NavBarLogo" />
                <a href="#!" class="brand-logo">Project</a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="https://www.linkedin.com/in/gcanazacupe/">Contacto</a></li>
                    <li><a href="https://github.com/gonzccode">Repositorio</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;