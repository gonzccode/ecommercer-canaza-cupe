import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import productData from './products.json';
import './ItemDetailContainer.css'
import db from '../../services';
import { collection, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const params = useParams();

    useEffect(() =>{
        const  getColData = async () => {
          try {
            const data = collection(db, "productos");
            const col = await getDocs(data);
            const res = col.docs.map((doc) => doc = {id: doc.id, ... doc.data()} );
            const result = res.filter((item) => item.id == params.id);

            setTimeout(() =>{
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
            </div>
        </>
    )
}

export default ItemDetailContainer;