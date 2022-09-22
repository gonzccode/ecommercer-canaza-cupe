import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ItemCount.css'

const ItemCount = ({stockItem, initial, onAdd}) => {
    const [stock, setStock] = useState(initial);

    return (
        <div>
            <div>
            <i className="bi bi-dash-circle-fill btn-add" onClick={stock > 0? () => setStock(stock - 1):0}></i>
            Cantidad: {stock}
            <i className="bi bi-plus-circle-fill btn-add" onClick={stock < stockItem?() => setStock(stock + 1):stockItem}></i>
            </div>
            <div>
                <button onClick={() => onAdd(stock)} className="btn btn-success" disabled={stock === 0} style={{'margin-top':'10px'}}>
                    Agregar a carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;