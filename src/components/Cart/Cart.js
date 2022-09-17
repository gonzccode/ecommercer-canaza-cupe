import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const {items} = useContext(CartContext);

  return (
    <>
      <div>Carrito de compras</div>
      {items.length ?
      <ol>
        {items.map(((item, index) => <li key={index}>{item.title} - {item.quantity}</li>))}
      </ol>
      : <span>No hay productos</span>}
    </>
    
  )
}

export default Cart