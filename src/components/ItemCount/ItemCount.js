import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ItemCount.css'

const ItemCount = () => {
    const [stock, setStock] = useState(0);

    return (
        <div>
            <div>
            <i class="bi bi-dash-circle-fill btn-add" onClick={stock > 0? () => setStock(stock - 1):0}></i>
            Cantidad: {stock}
            <i class="bi bi-plus-circle-fill btn-add" onClick={stock < 10?() => setStock(stock + 1):10}></i>
            </div>
            <div>
                <button className="btn btn-success">
                    Agregar a carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;