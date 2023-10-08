import './NavBar.css'
import {Link,NavLink} from 'react-router-dom'
import {CartWidget} from '../CartWidget/Cartwidget'
import { NavButton } from '../NavButton/NavButton'
import { useState } from 'react'



export const NavBar = () => {
  const [clicked,setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav className={`NavBar${clicked?'':'2'}`}>
      
   
     
       
          
        <div className='burger'>
          <NavButton clicked={clicked} handleClick={handleClick} / >
            <div className={`categorias ${clicked?'collapse':''}`}>
      
          
               <Link to='/' style={{textDecoration: 'none'}}>
                   <h3 className='titulonav'>e-comerce</h3>
               </Link>
         
               <NavLink to={'/categoria/belleza'} className={({isActive})=> isActive?'ActiveOption':'Option'} style={{textDecoration: 'none',color:'black', width: '1500'}}>Belleza</NavLink>
               <NavLink to={'/categoria/oficios'} className={({isActive})=> isActive?'ActiveOption':'Option'} style={{textDecoration: 'none',color:'black', width: '1500'}}>Oficios</NavLink>
               <NavLink to={'/categoria/tecnologia'} className={({isActive})=> isActive?'ActiveOption':'Option'}style=  {{textDecoration: 'none',color:'black', width: '1500'}}>Tecnologia</NavLink>
                <CartWidget/>
          </div>
      </div>
    
      
    
    </nav>
    
  )
}

