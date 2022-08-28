import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './ItemList.css'
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item';
 

function ItemList(props) {
    const {title,description,greeting, index, pictureUrl} = props;

    const onAdd = (value) => {
        console.log("Se agregó al carrito " +value + " items de productos " + index)
    }

    return (
        <div className="col col-4">
            <div className="card" style={{width: '22rem'}}>
                <img src={pictureUrl} className="card-img-top card-logo" alt="..."/>
                <div className="card-body">
                    {/* <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h5><strong>Hola, soy {greeting}</strong> </h5> */}
                    <Item title={title} description={description} greeting={greeting} />
                    <ItemCount stockItem={10} initial={1} onAdd={onAdd}/>
                </div>
            </div>
        </div>
        
    );
}

export default ItemList;