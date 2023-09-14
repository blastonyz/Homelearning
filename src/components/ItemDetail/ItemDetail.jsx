
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartProvider } from '../../context/CartContext'
import { useContext } from 'react'


export const ItemDetail =  ({nombre,precio,categoria,img,checkout}) => {  
    const {addItem} = useContext(CartContext)
    return(
            <article className='CardItem2'>
                <header className='Header'>
                    <h2 className='ItemHeader2'>
                        {nombre}
                    </h2>
                </header>
                <section className='ItemImg'>
                    <picture className='ItemPic'>
                     <img src={img} alt={nombre} className='ItemPic' />
                    </picture>
                        <p className='Info'>
                         Categoria: {categoria}
                          </p>
                         <p className="Info">
                            Precio: ${precio}
                         </p>
 
                </section>
                   
                     <button className='OptionC' onClick={addItem}> Agregar al Carrito
                     </button>    
                    <Link to={checkout} className='OptionC' >
                        <p className='botonComprar'>COMPRAR</p>
                    </Link>
                       
                        
                    


             
               
            </article>
    )
}

