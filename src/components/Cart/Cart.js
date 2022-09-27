import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Formulario from '../Formulario/Formulario'

const Cart = () => {
  const {items} = useContext(CartContext);
  const {removeItem} = useContext(CartContext);
  let total = 0;

  items.map(item => {
      total += item.price*item.quantity;
  })

  const removeItemCart = (id) => {
    removeItem(id)
  }

  return (
    <>
      <div style={{'marginTop':'10px'}}>
        <h2>
          <strong>Carrito de compras</strong>
        </h2>
        
      </div>
      {items.length ?
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <ol>
                {items.map(((item, index) =>
                <div className="card mb-3" style={{'maxWidth': '540px'}} key={index}>
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img src={item.pictureUrl} className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        {/* <p class="card-text"><small class="text-muted">{item.greeting}</small></p> */}
                        <p className="card-text">Precio: {item.price} / Cantidad: {item.quantity}</p>
                        <p className="card-text" style={{'marginTop':'-8px'}}><strong>Sub Total: S/. {item.price*item.quantity}</strong></p>
                        <button className="btn btn-danger btn-sm" style={{'marginTop':'-5px', paddingBottom:'5px'}} onClick={()=> removeItemCart(item.id)}>
                          <i className="bi bi-trash-fill" style={{'fontSize':'17px'}}>Eliminar</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                  ))}
              </ol>
            </div>
            <div className='card col-md-6'>
              
              <Formulario total={total} items={items} />
              
            </div>
          </div>
        </div>  
      : 
      <div>
        <h5>
          No hay productos
        </h5>
        <Link to={'/'}>
          <button className="btn btn-dark">
            Volver a inicio
          </button>
        </Link>
      </div>
      }
    </>
    
  )
}

export default Cart