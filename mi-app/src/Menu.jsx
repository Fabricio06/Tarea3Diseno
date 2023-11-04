import React, { useState } from 'react';
import './Nav.css';


const Menu = () =>{
    const  [isOpen, setIsOpen] = useState(false)
    
    return(
        <div className='Menu'>
            <div className='nav-logo'><a href="/App"><strong>TEC</strong>Software</a></div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#">Productos</a>
                <a href="factura">Facturas</a>
                <a href="#">Clientes</a>
                <a href="#">Promociones</a>
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