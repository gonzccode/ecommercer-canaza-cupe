import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const arrayList = [
        {
          id: '1',
          title: 'Proyecto 1',
          description:'Este es el proyecto 1',
          greeting: 'Estudiante 1',
          pictureUrl: 'https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg'
        },
        {
          id: '2',
          title: 'Proyecto 2',
          description:'Este es el proyecto 2',
          greeting: 'Estudiante 2',
          pictureUrl: 'https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg'
        },
        {
          id: '3',
          title: 'Proyecto 3',
          description:'Este es el proyecto 3',
          greeting: 'Estudiante 3',
          pictureUrl: 'https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg'
        },
        {
          id: '4',
          title: 'Proyecto 4',
          description:'Este es el proyecto 4',
          greeting: 'Estudiante 4',
          pictureUrl: 'https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg'
        },
        {
          id: '5',
          title: 'Proyecto 5',
          description:'Este es el proyecto 5',
          greeting: 'Estudiante 5',
          pictureUrl: 'https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg'
        },
        {
          id: '6',
          title: 'Proyecto 6',
          description:'Este es el proyecto 6',
          greeting: 'Estudiante 6',
          pictureUrl: 'https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg'
        },
    
    ] 

    useEffect(() =>{
      const product = new Promise ((resolve, rejected) => {
        setTimeout(() =>{
          resolve(arrayList)
        }, 2000);
      })

      product
        .then(res => setProducts(res))
        .catch((error) => console.log(error))
        .finally(() => console.log("se cargó los productos"))

      return() => {
        
      }

    }, []);


    return (
        <section className="container">
            <div className='row'>
                {products.length <=0 ? <h3>Cargando productos ...</h3> : products.map((item,index) => (
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