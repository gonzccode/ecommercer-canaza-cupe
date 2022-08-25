import React from 'react'

const Item = ({title, description, greeting}) => {
  return (
    <div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href='#producto'>Ver más detalles</a>
        <h5><strong>Hola, soy {greeting}</strong> </h5>
    </div>
  )
}

export default Item;