import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './ItemList.css'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
 

function ItemList(props) {
    const {title,description,greeting, index, pictureUrl} = props;

    return (
        <div className="col-md-4">
            <div className="card" style={{maxWidth: '22rem', borderRadius:'25px'}}>
                <img src={pictureUrl} className="card-img-top card-logo" alt="..." style={{borderRadius:'25px 25px 0px 0px'}} />
                <div className="card-body" style={{'borderTop': '1px solid black'}}>
                    <Item title={title} description={description} greeting={greeting} />
                    <Link to={`/detalle/${index}`}>
                        <button className="btn btn-primary">
                            Más detalle
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ItemList;