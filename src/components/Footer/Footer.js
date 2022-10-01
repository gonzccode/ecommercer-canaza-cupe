import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer>
            <div id="footerLink">
                <p>
                    Desarrollado por Gonzalo Canaza
                </p>
                <Link to={"https://github.com/gonzccode"} target="_blank" style={{margin: '5px'}}>
                    <i className="bi bi-github"></i>
                </Link>
                <Link to={"https://www.linkedin.com/in/gcanazacupe/"} target="_blank" style={{margin: '5px'}}>
                    <i className="bi bi-linkedin"></i>
                </Link>
            </div>
        </footer>
    </div>
  )
}

export default Footer