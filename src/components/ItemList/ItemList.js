import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './ItemList.css'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
 

function ItemList(props) {
    const {title,description,greeting, index, pictureUrl} = props;

    return (
        <div className="col col-4">
            <div className="card" style={{width: '22rem'}}>
                <img src={pictureUrl} className="card-img-top card-logo" alt="..."/>
                <div className="card-body" style={{'borderTop': '1px solid black'}}>
                    <Item title={title} description={description} greeting={greeting} />
                    <Link to={`/detalle/${index}`}>Más detalle</Link>
                </div>
            </div>
        </div>
        
    );
}

export default ItemList;