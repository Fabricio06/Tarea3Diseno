import React from 'react';
import Menu from './Menu';

const Clientes  = () =>{
    return(
        <div className='Cliente'>
            <div>
                <Menu/>
            </div>
            <div className='form2'>
            <form action="./php/formulario.php" method="post" autocomplete="off">
                <label for="inputNombreFactura">Id cliente:</label>
                <input type="text" id="inputNombreFactura" class="estilosInput" name="inputNombreFactura"/>
                <button type='sumbit'>Buscar</button>
            </form>
            <table>
                <thead>
                    <td><b>id</b></td>
                    <td><b>Nombre</b></td>
                    <td><b>Primer Apellido</b></td>
                    <td><b>Segundo Apellido</b></td>
                    <td><b>Dirección</b></td>
                </thead>
                <tbody>
                </tbody>
                <tfoot>

                </tfoot>
            </table>
            <div className='Agregar'>
            <button type='sumbit'><a href="agregarCliente">Agregar Cliente</a></button>
            </div>
            </div>
        </div>
    );
}

export default Clientes;
