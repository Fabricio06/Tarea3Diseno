import React from 'react';
import Menu from './Menu';

const AgregarProducto = () =>{
    return(
        <div className='AgregarProducto'>
            <div>
                <Menu/>
            </div>
            <div className='form3'>
            <form action="./php/formulario.php" method="post" autocomplete="off">
                <label className="form-label">Nombre</label>
                <input type="text" id="inputNombreProducto" class="estilosInput" name="inputNombreCliente"/>
                <br/>
                <label className="form-label">Distribuidora</label>
                <input type="text" id="inputDistribuidora" class="estilosInput" name="inputDistribuidora"/>
                <br />
                <label className="form-label">Precio Unitario</label>
                <input type="text" id="inputPrecio" class="estilosInput" name="inputPrecio"/>
                <br/>
                <label className="form-label">Cantidad</label>
                <input type="text" id="inputCantidad" class="estilosInput" name="inputCantidad"/>
                <br/>
                <label className="form-label">Categoría</label>
                <input type="text" id="inputCategoria" class="estilosInput" name="inputCategoria"/>
                <br/>
                <button type='sumbit'>Agregar</button>
            </form>
            </div>
        </div>
    );


}

export default AgregarProducto;