import React, { useState } from 'react';
import './Nav.css';


const Menu = () =>{
    const  [isOpen, setIsOpen] = useState(false)
    
    return(
        <div className='Menu'>
            <div className='nav-logo'><a href="/Main"><strong>TEC</strong>Software</a></div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="producto">Productos</a>
                <a href="factura">Facturas</a>
                
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
         </div>
        
    );
}




export default Menu;