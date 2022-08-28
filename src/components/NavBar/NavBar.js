import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
            <a className="text-white navbar-brand" href="#">Proyect Student</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="text-white nav-link active" aria-current="page" href="#inicio">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="text-white nav-link" href="https://www.linkedin.com/in/gcanazacupe/">Nosotos</a>
                </li>
                <li className="nav-item">
                    <a className="text-white nav-link" href="https://github.com/gonzccode?tab=repositories">Contacto</a>
                </li>
                </ul>
                <span className="text-white navbar-text">
                    <a className="text-white nav-link" href="#carrito"><CartWidget/></a>
                </span>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;