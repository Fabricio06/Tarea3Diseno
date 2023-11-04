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
                <label for="inputNombreFactura">Numero factura:</label>
                <input type="text" id="inputNombreFactura" class="estilosInput" name="inputNombreFactura"/>
                <br></br>
                <label for="inputNombreCliente">Nombre Cliente:</label>
                <input type="text" id="inputNombreCliente" class="estilosInput" name="inputNombreCliente"/>
                <button type='sumbit'>Buscar</button>
            </form>
            </div>
            <div className='table'>
            <table>
                <thead>
                    <td><b>#</b></td>
                    <td><b>Fecha</b></td>
                    <td><b>Cliente</b></td>
                    <td><b>Vendedor</b></td>
                    <td><b>Estado</b></td>
                    <td><b>Subtotal</b></td>
                    <td><b>Total</b></td>
                </thead>
                <tbody>

                </tbody>
                <tfoot>

                </tfoot>
            </table>
            </div>
        </div>
    );
}

export default Factura;