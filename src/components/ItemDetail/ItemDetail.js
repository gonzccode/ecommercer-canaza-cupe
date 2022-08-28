import React from 'react'

const ItemDetail = (item) => {
  return (
    <div className="card" style={{width: '22rem'}}>
            <h4>{item.title}</h4>
            <img src={item.pictureUrl} className="card-img-top card-logo" alt="..."/>
            <div className="card-body">
                <p>{item.description}</p>
                <p><strong>{item.price}</strong></p>
            </div>
        </div>
  )
}

export default ItemDetail