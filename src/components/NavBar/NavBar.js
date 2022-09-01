import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

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
                    <Link className="text-white nav-link active" aria-current="page" to={'/'}>Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="text-white nav-link" to={'/'}>Productos</Link>
                </li>
                <li className="nav-item">
                    <Link className="text-white nav-link" to={'/'}>Contacto</Link>
                </li>
                </ul>
                <span className="text-white navbar-text">
                    <Link className="text-white nav-link" to={'/'}><CartWidget/></Link>
                </span>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;