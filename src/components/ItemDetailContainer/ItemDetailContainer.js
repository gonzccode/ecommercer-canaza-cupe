import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import productData from './products.json';
// import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailContainer.css'
import db from '../../services';
import { collection, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const params = useParams();

    // const onAdd = (value) => {
    //     console.log("Se agregó al carrito " +value + " items de productos " + params.id)
    // }

    useEffect(() =>{
        // const products = new Promise ((resolve, rejected) => {
        //   setTimeout(() =>{
        //     resolve(productData.data[params.id-1])
        //   }, 2000);
        // })
  
        // products
        //   .then(res => {
        //     setProduct(res)
        // })
        //   .catch((error) => console.log(error))
        //   .finally(() => console.log("se cargó los productos"))
        const  getColData = async () => {

          try {
            const data = collection(db, "productos");
            const col = await getDocs(data);
            const res = col.docs.map((doc) => doc = {id: doc.id, ... doc.data()} )
            const result = res.filter((item) => item.id == params.id)
            //console.log(result[0])
            //console.log(params.id)
            setTimeout(() =>{
              // setProduct(res[params.id])
              setProduct(result[0])
            }, 2000);
  
          } catch (error) {
            console.log(error)
            
          }
          
          
        }
  
        getColData();
  
        return() => {
          
        }
  
      }, []);

    return ( 
        <> 
            <div className="card" style={{width: '22rem'}}>
                <ItemDetail item={product} />
                {/* <p>{product[0].greeting}</p> */}
                {/* <ItemCount stockItem={10} initial={1} onAdd={onAdd}/> */}
            </div>
            
        </>
        
        
    )
}

export default ItemDetailContainer;