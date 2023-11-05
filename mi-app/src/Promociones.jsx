import React from 'react';
import Menu from './Menu';

const Promociones  = () =>{
    return(
        <div className='Promocion'>
            <div>
                <Menu/>
            </div>
            <div className='form2'>
            <form action="./php/formulario.php" method="post" autocomplete="off">
                <label for="inputNombrePromocion">Id promoción:</label>
                <input type="text" id="inputNombrePromocion" class="estilosInput" name="inputNombrePromocion"/>
                <button type='sumbit'>Buscar</button>
            </form>
            <table>
                <thead>
                    <td><b>id</b></td>
                    <td><b>Nombre Promoción</b></td>
                    <td><b>Motivo Promoción</b></td>
                    <td><b>Porcentaje Descuento</b></td>
                </thead>
                <tbody>
                </tbody>
                <tfoot>

                </tfoot>
            </table>
            <div className='Agregar'>
            <button type='sumbit'><a href="agregarPromocion">Agregar Promoción</a></button>
            </div>
            </div>
        </div>
    );
}

export default Promociones;
