import './Checkout.css';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { SpinnerDotted } from 'spinners-react/lib/esm/SpinnerDotted';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where, writeBatch, documentId } from 'firebase/firestore'
import { db } from '../../services/index'


const Checkout = () => {
    const { cart, clearCart, getTotal, totalQuantity } = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [coments, setComents] = useState('')
    const navigate = useNavigate()
    
    const eValidate = (e) => {
        e.preventDefault()
    }

    const createOrder = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (!name && !phone && !email) {
            Swal.fire(
                'Campos requeridos incompletos!',
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
                Productos: cart.map(product => ({
                    id: product.id, 
                    titulo: product.titulo,
                    img: product.img, 
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
                const stockDb = dataDoc.stock
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
                    html: `En breve, un asesor se estara comunicando con usted. Su numero de orden es: <i><b>${orderGenerated.id}</b></i>`,
                    icon:'success'
                })
                clearCart(cart)
                setTimeout(() => {
                    navigate('/')
                },2000)
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
        if (loading) {
            return (
                <div className='spinner'>
                    <SpinnerDotted size={100} thickness={79} speed={100} color="rgba(245, 82, 57, 1)" />
                </div>)
        }
    }

        return (
            <div>
                <div className='titleOrder'>
                    <h1>Completa los datos para generar la orden</h1>
                </div>
                <div className='formOrder'>
                    <form className="">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nombre completo</label>
                            <input type="text" class="form-control formColor-modif" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Telefono</label>
                            <input type="tel" name="phone" placeholder="12-3456-7890" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" required class="form-control formColor-modif" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control formColor-modif" placeholder="suCorreo@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Confirmar Email</label>
                            <input type="email" class="form-control formColor-modif" placeholder="suCorreoConfirmado@example.com" value={emailConfirm}  onChange={(e) => setEmailConfirm(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Comentario adicional</label>
                            <textarea class="form-control formColor-modif" id="message" rows="5" value={coments} onChange={(e) => setComents(e.target.value)}></textarea>
                        </div>
                        <div className='btnBuy'>
                        { email === emailConfirm ?
                        <button type="button" class="btn btn-outline-dark" onClick={createOrder}>Comprar</button>
                        :
                        <button type="button" class="btn btn-outline-dark" onClick={eValidate}>Por favor, verifique que los emails coincidan</button>
                        }
                        </div>
                    </form>
                </div>
                <div className='detailOrder'>
                    <h2>Resumen de compra</h2>
                    <br/>
                    {cart.map(prod => {
                        return (
                            <div className='orderCheckout' key={prod.id}>
                                <img id='imgCheckout' alt='imagen' src={prod.img}/>
                                <p id='sizePorder'>{prod.titulo}</p>
                                <p id='sizePorder'>{prod.quantity}</p>
                                <p id='sizePorder'>${prod.precio}</p>
                            </div>
                        )
                    })}
                    <p id='sizePorder2'>Cantidad de productos: {totalQuantity}</p>
                    <p id='sizePorder2'>Total: ${getTotal(cart)} </p>
                </div>
            </div>
        )
}   

export default Checkout;