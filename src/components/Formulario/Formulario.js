import React, {useContext, useState} from 'react';
import { Link, Input } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import db from '../../services';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import emailjs from 'emailjs-com';

const Formulario = ({total, items}) => {

    const MySwal = withReactContent(Swal)
    const [formulario, setFormulario] = useState(
        {
            buyer: {
                name: "",
                surname: "",
                email:"",
                phone:""
            },
            total: total,
            items: items
        }
    )
    const {clearCart} = useContext(CartContext)

    const {buyer: {name, surname, email, phone}, } = formulario

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormulario({
            ... formulario,
            buyer: {
                ... formulario.buyer,
                [name]: value,
            },
        });
    }

    const setInFirebase = async (order) => {
        try {
            const col = collection(db, "ordenes")
            const generateOrder =  await addDoc(col, order)

            emailjs.send('service_3xkrcvn','template_am8452s', {
                name: order.buyer.name,
                surname: order.buyer.surname,
                email: order.buyer.email,
                phone: order.buyer.phone,
                message: 'Su orden se genero correctamente.' + ' Su número de compra es ' + generateOrder.id + '.'
            }, 'uRDOr5vv-7D0oty7x')
            .then((response) => {
                    console.log('Correo enviado! ', response.status, response.text);
            }, (err) => {
                    console.log('Correo fallido...', err);
            });

            MySwal.fire({
                    title: 'Compra exitosa',
                    text: 'Su orden se genero correctamente ' + ' ' + generateOrder.id + '. Enviamos a su cuenta un correo eléctronico.' ,
                    icon: 'success',
                    confirmButtonColor: '#28a745',
                    confirmButtonText: 'Confirmar'
                }).then((result) => {
                    if(result.isConfirmed){
                        setTimeout(()=>{
                            clearCart()
                        }, 1000);
                    }
            })
        } catch (error) {
            console.log(error)
        }
    }

    function successOrder (e) {
        e.preventDefault();
        if( name && surname && email && phone) {
            setInFirebase(formulario)
        }else {
            MySwal.fire({
                title: 'Opps!',
                text: 'Completa los campos',
                icon: 'error',
                confirmButtonColor: '#ffc107',
                confirmButtonText: 'Confirmar'
            })
        }
    }
    
    return (
        <>
            <div style={{padding:'20px'}}>
                <form className='container border' onSubmit={successOrder}>
                    <div className='mb-3' style={{marginTop:'10px'}}>
                        <h4>
                            <strong>
                            Datos de Contacto
                            </strong>
                        </h4>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Nombre(s)"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            name="surname"
                            value={surname}
                            placeholder="Apellidos"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            type="number"
                            name="phone"
                            value={phone}
                            placeholder="Teléfono o celular"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={{marginBottom:'20px'}}>
                        <h4>
                            <strong>
                            Total: S/. {total}
                            </strong>
                        </h4>
                        <div>
                            <button className="btn btn-primary btn-md mb-2" type="submit">
                                Terminar la compra
                            </button>
                        </div>
                        <div>
                            <Link to={'/'}>
                                <button className="btn btn-warning btn-md ">
                                Seguir comprando 
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario