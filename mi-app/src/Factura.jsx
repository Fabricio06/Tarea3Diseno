import React from 'react';
import Menu from './Menu';


const Factura = () =>{
    return(
        
        <div className='Factura'>
            <div>
                <Menu/>
            </div>
            <div className='form2'>
            <form action="./php/formulario.php" method="post" autocomplete="off">
                <label for="inputNombreFactura">Id factura:</label>
                <input type="text" id="inputNombreFactura" class="estilosInput" name="inputNombreFactura"/>
                <button type='sumbit'>Buscar</button>
                
            </form>
            <table>
                <thead>
                    <td><b>#</b></td>
                    <td><b>Fecha</b></td>
                    <td><b>Cliente</b></td>
                    <td><b>Vendedor</b></td>
                    <td><b>Estado</b></td>
                    <td><b>Total</b></td>
                </thead>
                <tbody>

                </tbody>
                <tfoot>

                </tfoot>
            </table>
            <div className='Agregar'>
            <button type='sumbit'><a href="agregarFactura">Agregar Factura</a></button>
            </div>
            </div>
            
        </div>
    );
}

export default Factura;