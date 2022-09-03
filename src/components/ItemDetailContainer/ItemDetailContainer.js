import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import productData from './products.json';
// import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const params = useParams();

    // const onAdd = (value) => {
    //     console.log("Se agregó al carrito " +value + " items de productos " + params.id)
    // }

    useEffect(() =>{
        const products = new Promise ((resolve, rejected) => {
          setTimeout(() =>{
            resolve(productData.data[params.id-1])
          }, 2000);
        })
  
        products
          .then(res => {
            setProduct(res)
        })
          .catch((error) => console.log(error))
          .finally(() => console.log("se cargó los productos"))
  
        return() => {
          
        }
  
      }, []);

    return (
        <> 
            <div className="card" style={{width: '22rem'}}>
                <ItemDetail item={product} />
                {/* <ItemCount stockItem={10} initial={1} onAdd={onAdd}/> */}
            </div>
            
        </>
        
        
    )
}

export default ItemDetailContainer;