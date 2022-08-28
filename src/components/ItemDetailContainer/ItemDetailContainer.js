import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    useEffect(() =>{
        fetch('products.json')
        // .then(response => response.json())
        .then(data => 
            setTimeout(() => {
                //llama al item 1
                setProduct(data[0])
                console.log(data)
            },2000)
            )
        .catch((error) => {
            console.error("Se produjo un error: ",error);
        })
  
        return() => {}
  
    }, []);


    return (
        <ItemDetail item={product} />
    )
}

export default ItemDetailContainer;