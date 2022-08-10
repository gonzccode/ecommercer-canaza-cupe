import React from "react";
import ItemList from './ItemList';
import './ItemListContainer.css'

const ItemListContainer = () => {
    const arrayList = [
        {
          title: 'Proyecto 1',
          description:'Este es el proyecto 1',
          greeting: 'Estudiante 1'
        },
        {
          title: 'Proyecto 2',
          description:'Este es el proyecto 2',
          greeting: 'Estudiante 2'
        },
        {
          title: 'Proyecto 3',
          description:'Este es el proyecto 3',
          greeting: 'Estudiante 3'
        },
        {
          title: 'Proyecto 4',
          description:'Este es el proyecto 4',
          greeting: 'Estudiante 4'
        },
        {
          title: 'Proyecto 5',
          description:'Este es el proyecto 5',
          greeting: 'Estudiante 5'
        },
        {
          title: 'Proyecto 6',
          description:'Este es el proyecto 6',
          greeting: 'Estudiante 6'
        },
    
    ]
    return (
        <section className="container">
            <div className='row'>
                {arrayList.map((item,index) => (
                    <ItemList key={index}
                    title={item.title}
                    description={item.description}
                    greeting={item.greeting}
                    />
                ))}
            </div>
        </section>
        
    );
}

export default ItemListContainer;