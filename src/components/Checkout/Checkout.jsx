import React from 'react';
import './Checkout.css';
import { useState, useContext } from 'React';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { SpinnerDotted } from 'spinners-react/lib/esm/SpinnerDotted';
import { Navigate } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where, writeBatch, documentId } from 'firebase/firestore'
import { db } from '../../services/index.js'


const Checkout = () => {
    const { cart, clearCart, getTotal, totalQuantity } = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [coments, setComents] = useState('')
    
    const eValidate = (e) => {
        e.preventDefault()
    }

    const createOrder = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (!name && !phone && !email) {
            Swal.fire(
                'Campos requeridos incompletos.',
                'Porfavor complete los campos con sus datos para generar la orden de compra.',
                'question'
            )
        } else {
            const order = {
                buyer: {
                    nombre: name,
                    telefono : phone,
                    email: email,
                    comentarios: coments,
                },
                productos: cart.map(product => ({
                    id: product.id, 
                    titulo: product.titulo, 
                    cantidad: product.quantity })),
                    total: getTotal(cart)
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromF = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromF

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb
                const productAddedtoCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedtoCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const ordersCollection = collection(db, 'orders')
                const orderGenerated = await addDoc(ordersCollection, order)
                Swal.fire({
                    title:'Muchas gracias por su compra!.',
                    html: `En breve, un asesor se estara comunicando con usted. Su numero de orden es: ${orderGenerated}`,
                    icon:'success'
                })
                clearCart(cart)
                setTimeout(() => {
                    Navigate('/')
                },3000)
            } else {
                Swal.fire({
                    title: 'Producto fuera de Stock.',
                    icon: 'warning',
                    showConfirmButton: false,
                    timer: 1500,
                })
            }
            setLoading(false)
        }
    }

        if (loading) {
            return (
                <div className='spinner'>
                    <SpinnerDotted size={100} thickness={79} speed={100} color="rgba(245, 82, 57, 1)" />
                </div>)
        }

        return (
            <div>
                <h1>Completa los datos para generar la orden.</h1>
                    <form className="myForm">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nombre completo</label>
                            <input type="text" class="form-control formColor-modif anchoModif-form" id="email" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Telefono</label>
                            <input type="number" class="form-control formColor-modif anchoModif-form" id="email" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control formColor-modif anchoModif-form" id="email" placeholder="suCorreo@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Confirmar Email</label>
                            <input type="email" class="form-control formColor-modif anchoModif-form" id="email" placeholder="suCorreoConfirmado@example.com" value={emailConfirm}  onChange={(e) => setEmailConfirm(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Comentario adicional</label>
                            <textarea class="form-control formColor-modif anchoModif-form" id="message" rows="5" value={coments} onChange={(e) => setComents(e.target.value)}></textarea>
                        </div>
                        <div>
                        { email === emailConfirm ?
                        <button type="button" class="btn btn-outline-dark" onClick={createOrder}>Generar orden de compra</button>
                        :
                        <button type="button" class="btn btn-outline-dark" onClick={eValidate}>Por favor, verifique que los emails coincidan. </button>
                        }
                        </div>
                        <div >
                            <h2>Su Pedido:</h2>
                            <ul>
                                <li>
                                {cart.map(prod => {
                                    return (
                                        <div  key={prod.id}>
                                            <li>{prod.titulo}</li>
                                            <li> {prod.quantity}</li>
                                            <p className='break'>----------------------------------------</p>
                                        </div>
                                    )
                                })}
                                </li>
                                <li className='myFormli'>Cantidad de productos: {totalQuantity}</li>
                                <li className='myFormli'>Total: ${getTotal(cart)} </li>
                            </ul>
                        </div>
                    </form>
            </div>
        )
}   

export default Checkout;