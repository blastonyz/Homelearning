import React from 'react'
import './NavButton.css'

export const NavButton = (props) => {
  return (
    <div className='wrapper' onClick={props.handleClick}>
  
     <div className={`icon nav-icon-2 ${props.clicked?'open':''}`}>
          <span></span>
          <span></span>
          <span></span>
     </div>
  
</div>
  )
}
