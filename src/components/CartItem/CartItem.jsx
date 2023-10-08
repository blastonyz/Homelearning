import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './CartItem.css'
const CartItem = ({nombre,precio,id,checkout,img}) =>{
    const {removeItem} = useContext(CartContext)

    return(
        <div className="Principal">
            <section className="CartItem">
                  <div className="CartImg">
                    <img src={img} className="CartImg" alt="" />
                 </div>
                
                <div className="CartTitle">
                         <h2 className="CartText">{nombre}</h2>
                        <h2 className="CartText">  Precio: ${precio}</h2>
                </div>
                <div className="Butons">
                <Link to={checkout}  target='_blank' className="LinkC" >
                        <p className='botonComprar'>COMPRAR</p>
                    </Link>
                    <p>Remover</p>
                <button onClick={()=>removeItem(id)} className="Boton"> X</button>
                </div>
            </section>
        </div>
    )
}

export default CartItem;