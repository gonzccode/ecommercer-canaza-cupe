import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import db from '../../services';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const params = useParams();

    useEffect(() =>{
      const  getColData = async () => {
        try {
          const data = collection(db, "productos");
          const col = await getDocs(data);
          const res = col.docs.map((doc) => doc = {id: doc.id, ... doc.data()} )
          //console.log(res)
          setTimeout(() =>{
            setProducts(res)
          }, 2000);
        } catch (error) {
          console.log(error) 
        }
      }

      getColData();

      return() => {
        
      }

    }, []);

    const finallyProducts = params.category? products.filter((item) => item.category === params.category) : products

    return (
        <div className="container" style={{'paddingBottom':'20px', marginTop: '30px'}}>
            <div className='row'>
                {products.length <=0 ? <h3>Cargando productos ...</h3> : finallyProducts.map((item,index) => (
                    <ItemList key={index}
                    title={item.title}
                    description={item.description}
                    greeting={item.greeting}
                    index={item.id}
                    pictureUrl={item.pictureUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;