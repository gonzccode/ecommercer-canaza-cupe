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
    setCounter(count)
    addItem(item, count);
  }

  return (
    <div>
      {item.length <= 0 ? 
        <div className='loading-item' style={{background: 'none'}}><h3>Cargando producto ...</h3></div> :
        <div className='card-item' >
            <img src={item.pictureUrl} className="card-img-top card-logo" alt="..."/>
            <div className="card-body">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p><strong>S/. {item.price}</strong></p>
                {
                  counter !== 0 ? 
                  <Link to={'/cart'}>
                    <button className="btn btn-primary" style={{'marginTop':'10px'}}>
                        Finalizar compra
                    </button>
                  </Link> : 
                  <ItemCount stockItem={10} initial={1} onAdd={onAdd}/>
                }
            </div> 
        </div>
      }
    </div>
  )
}

export default ItemDetail