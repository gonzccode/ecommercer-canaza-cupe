import React from 'react';

const Item = ({title, description, greeting}) => {
  return (
    <div>
        <h5 className="card-title"><strong>{title}</strong> </h5>
        <p className="card-text">{description}</p>
        <p><strong>By: {greeting}</strong> </p>
    </div>
  )
}

export default Item;