import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({nombre,precio,id}) =>{
    const {removeItem} = useContext(CartContext)

    return(
        <div className="Principal">
            <section className="CartItem">
                <h4>{nombre}</h4>
                <div>Precio: ${precio}</div>
                
                <div>Subtotal: ${precio*cantidad}</div>
                <button onClick={()=>removeItem(id)} className="boton">X</button>
            </section>
        </div>
    )
}

export default CartItem;