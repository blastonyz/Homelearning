import './NavBar.css'
import {Link,NavLink} from 'react-router-dom'
import {CartWidget} from '../CartWidget/Cartwidget'
export const NavBar = () => {
  return (
    <nav className='NavBar'>
      
    <div className='categorias'>
    <CartWidget/>
    <Link to='/' style={{textDecoration: 'none'}}>
          <h3 className='titulonav'>e-comerce</h3>
        </Link>
      <NavLink to={'/categoria/belleza'} className={({isActive})=> isActive?'ActiveOption':'Option'} style={{textDecoration: 'none',color:'black', width: '1500'}}>Belleza</NavLink>
      <NavLink to={'/categoria/oficios'} className={({isActive})=> isActive?'ActiveOption':'Option'} style={{textDecoration: 'none',color:'black', width: '1500'}}>Oficios</NavLink>
      <NavLink to={'/categoria/tecnologia'} className={({isActive})=> isActive?'ActiveOption':'Option'}style={{textDecoration: 'none',color:'black', width: '1500'}}>Tecnologia</NavLink>
    </div>
    

    </nav>
    
  )
}

