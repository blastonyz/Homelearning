import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({id,nombre,precio,img,}) => {

        return(
            <article className="CardItem">
                    <header className="Header">
                        <h3 className="ItemHeader">
                            {nombre}
                        </h3>
                    </header>
                   
                    <section className='ItemImg'>
                    <picture className='ItemPic'>
                    <img src={img} alt={nombre} className='ItemPic' />
                    </picture>
                        <p className="Info">
                            precio: ${precio}
                        </p>
                     
                    </section>
                    <footer className="ItemFooter">
                        <Link to={`/item/${id}`} className="OptionB">Ver detalle
                        </Link>
                    </footer>
            </article>
        )


}