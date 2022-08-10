import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './ItemList.css'

function ItemList(props) {
    const {title,description,greeting} = props;

    return (
        <div className="col col-4">
            <div className="card" style={{width: '18rem'}}>
                <img src="https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg" className="card-img-top card-logo" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Hola, soy {greeting}</a>
                </div>
            </div>
        </div>
        
    );
}

export default ItemList;