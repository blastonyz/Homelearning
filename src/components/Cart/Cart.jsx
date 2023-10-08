import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom";
import './Cart.css'
export const Cart = () => {
    const {cart,cleanCart,cantidadTotal,} = useContext(CartContext)

    if(cantidadTotal === 0){
        return(
            <div>
                <h1>No Hay Productos en el Carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }
    return(
        <div className="Cart">
            {cart.map(p=> <CartItem key={p.id}{...p}/>)}
            <button onClick={()=>cleanCart } className="Button">Limpiar
            </button>
            
        </div>
    )
}