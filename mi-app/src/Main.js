import React from  'react';
import Menu from './Menu';
import { Outlet } from 'react-router-dom';
import Factura from './Factura';


const Main = () =>{
    return(
        <div className='Main'>
            <div>
                <Menu/>
            </div>
            <div>
            <Outlet /> {/* Este componente renderiza las rutas anidadas según la URL */}                
            </div>
        </div>
    )
}

export default Main;