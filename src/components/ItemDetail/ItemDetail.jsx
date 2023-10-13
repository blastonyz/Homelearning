import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


export const ItemDetail =  ({nombre,precio,categoria,img,checkout,id}) => {  
    const [itemAdded,setitemAdded] = useState(null)
    const {addItem}= useContext(CartContext)
    

    const handlerAdd = () =>{
        const item = {
            nombre,precio,categoria,img,checkout,id,
          };
      addItem(item)

      setitemAdded(item)
      if(itemAdded == null){
        return 0;
      }
    }
  
  

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
                    
                    
                    <button type='button'onClick={handlerAdd} className='OptionC' >Agregar al carrito</button>
                    <Link to={checkout} className='OptionC' target='_blank' >
                        <p >COMPRAR</p>
                    </Link>
                       
                        
                    


             
               
            </article>
    )
}

