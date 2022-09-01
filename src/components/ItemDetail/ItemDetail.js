import React from 'react';

const ItemDetail = ({item}) => {

  return (
    <div >
            <h4>{item.title}</h4>
            <img src={item.pictureUrl} className="card-img-top card-logo" alt="..."/>
            <div className="card-body">
                <p>{item.description}</p>
                <p><strong>S/. {item.price}</strong></p>
            </div>
        </div>
  )
}

export default ItemDetail