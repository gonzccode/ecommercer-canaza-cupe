import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CartWidget.css'
import { CartContext } from '../../context/CartContext'

function CartWidget () {
    const {items} = useContext(CartContext);
    let total = 0;

    items.map(item => {
        total += item.quantity;
    })

    return (
        <div className="CartWidget" style={{marginLeft:'-80px', marginBottom:'-18px'}}>  
            <i className="bi bi-cart-fill" style={{fontSize:'30px'}}>
                {total == 0 ?  <p></p> : total }
            </i>
        </div>
    );
}

export default CartWidget;