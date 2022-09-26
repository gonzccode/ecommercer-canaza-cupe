import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import db from '../../services';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const params = useParams();
    
    const arrayList = [
        {
          id: '1',
          title: 'Proyecto 1',
          description:'Este es el proyecto 1',
          greeting: 'Estudiante 1',
          pictureUrl: 'https://www.wozzo.es/images/wozzo/hosted1.png',
          category: 'junior'
        },
        {
          id: '2',
          title: 'Proyecto 2',
          description:'Este es el proyecto 2',
          greeting: 'Estudiante 2',
          pictureUrl: 'https://www.wozzo.es/images/wozzo/octec1.png',
          category: 'junior'
        },
        {
          id: '3',
          title: 'Proyecto 3',
          description:'Este es el proyecto 3',
          greeting: 'Estudiante 3',
          pictureUrl: 'https://www.wozzo.es/images/wozzo/poseForGood.png',
          category: 'junior'
        },
        {
          id: '4',
          title: 'Proyecto 4',
          description:'Este es el proyecto 4',
          greeting: 'Estudiante 4',
          pictureUrl: 'https://www.wozzo.es/images/wozzo/epd-min.png',
          category: 'senior'
        },
        {
          id: '5',
          title: 'Proyecto 5',
          description:'Este es el proyecto 5',
          greeting: 'Estudiante 5',
          pictureUrl: 'https://www.wozzo.es/images/wozzo/cmcMockup.jpg',
          category: 'senior'
        },
        {
          id: '6',
          title: 'Proyecto 6',
          description:'Este es el proyecto 6',
          greeting: 'Estudiante 6',
          pictureUrl: 'https://www.wozzo.es/images/wozzo/kmConcept.jpg',
          category: 'senior'
        },
    
    ] 

    useEffect(() =>{
      // const product = new Promise ((resolve, rejected) => {
      //   setTimeout(() =>{
      //     resolve(arrayList)
      //   }, 2000);
      // })

      // product
      //   .then(res => setProducts(res))
      //   .catch((error) => console.log(error))
      //   .finally(() => console.log("se cargó los productos"))

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
    //console.log('yo params', params.category)

    return (
        <section className="container" style={{'paddingBottom':'20px'}}>
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
        </section>
        
    );
}

export default ItemListContainer;