import React from 'react';
import Menu from './Menu';


const Producto = () =>{
    return(
        <div className='Producto'>
            <div>
                <Menu/>
            </div>
            <div className='form2'>
            <form action="./php/formulario.php" method="post" autocomplete="off">
                <label for="inputNombreProducto">Id producto:</label>
                <input type="text" id="inputNombreProducto" class="estilosInput" name="inputNombreProducto"/>
                <button type='sumbit'>Buscar</button>
            </form>
            <table>
                <thead>
                    <td><b>id</b></td>
                    <td><b>Nombre</b></td>
                    <td><b>Precio Unitario</b></td>
                    <td><b>Cantidad</b></td>
                    <td><b>Categoria</b></td>
                </thead>
                <tbody>
                </tbody>
                <tfoot>

                </tfoot>
            </table>
            <div className='Agregar'>
            <button type='sumbit'><a href="agregarProducto">Agregar Prodcuto</a></button>
            </div>
            </div>
        </div>
    );
}

export default Producto;