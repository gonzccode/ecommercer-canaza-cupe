import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {
  const [counter, setCounter] = useState(0);
  const {addItem} = useContext(CartContext)
  const params = useParams();

  const onAdd = (count) => {
    console.log("Se agregó al carrito " +count + " items de productos " + params.id)
    setCounter(count)
    addItem(item, count);
  }


  return (
    <div >
            <h4>{item.title}</h4>
            <img src={item.pictureUrl} className="card-img-top card-logo" alt="..."/>
            <div className="card-body">
                <p>{item.description}</p>
                <p><strong>S/. {item.price}</strong></p>
            </div>
            {
              counter !== 0 ? 
              <Link to={'/cart'}>
                <button className="btn btn-primary">
                    Finalizar compra
                </button>
              </Link> : 
              <ItemCount stockItem={10} initial={1} onAdd={onAdd}/>
            }
            
        </div>
  )
}

export default ItemDetail