import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CartWidget.css'

function CartWidget () {
    return (
        <div className="CartWidget">
            <i className="bi bi-cart-fill">4</i>
        </div>
    );
}

export default CartWidget;