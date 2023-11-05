import React from 'react';
import Menu from './Menu';

const AgregarCliente = () =>{
    return(
        <div className='AgregarCliente'>
            <div>
                <Menu/>
            </div>
            <div className='form3'>
            <form action="./php/formulario.php" method="post" autocomplete="off">
                <label className="form-label">Nombre</label>
                <input type="text" id="inputNombreCliente" class="estilosInput" name="inputNombreCliente"/>
                <br/>
                <label className="form-label">Primer Apellido</label>
                <input type="text" id="inputApellido" class="estilosInput" name="inputApellido"/>
                <br />
                <label className="form-label">Segundo Apellido</label>
                <input type="text" id="inputApellido2" class="estilosInput" name="inputNombreApellido2"/>
                <br/>
                <label className="form-label">Dirección</label>
                <input type="text" id="inputDireccion" class="estilosInput" name="inputDireccion"/>
                <br/>
                <button type='sumbit'>Agregar</button>
            </form>
            </div>
        </div>
    );


}

export default AgregarCliente;