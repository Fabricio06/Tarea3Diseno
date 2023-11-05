import React from 'react';
import Menu from './Menu';

const AgregarPromocion = () =>{
    return(
        <div className='AgregarPromocion'>
            <div>
                <Menu/>
            </div>
            <div className='form3'>
            <form action="./php/formulario.php" method="post" autocomplete="off">
                <label className="form-label">Nombre Promoción</label>
                <input type="text" id="inputNombrePromo" class="estilosInput" name="inputNombrePromo"/>
                <br/>
                <label className="form-label">Motivo Promoción</label>
                <input type="text" id="inputMotivo" class="estilosInput" name="inputMotivo"/>
                <br />
                <label className="form-label">Porcentaje descuento</label>
                <input type="text" id="inputDescuento" class="estilosInput" name="inputNombreDescuento"/>
                <br/>
                <button type='sumbit'>Agregar</button>
            </form>
            </div>
        </div>
    );


}

export default AgregarPromocion;