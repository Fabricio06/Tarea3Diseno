import React from 'react';
import Menu from './Menu';

const AgregarFactura = () =>{
    return(
        <div className='AgregarFactura'>
            <div>
                <Menu/>
            </div>
            <div className='form3'>
            <form action="./php/formulario.php" method="post" autocomplete="off">
                <label className="form-label">Fecha</label>
                <input type="date" id="inputFecha" class="estilosInput" name="inputFecha"/>
                <br/>
                <label className="form-label">Cliente  </label>
                <input type="text" id="inputCliente" class="estilosInput" name="inputCliente"/>
                <br />
                <label className="form-label">Vendedor</label>
                <input type="text" id="inputVendedor" class="estilosInput" name="inputVendedor"/>
                <br/>
                <label className="form-label">Estado   </label>
                <input type="text" id="inputEstado" class="estilosInput" name="inputEstado"/>
                <br/>
                <label className="form-label">Total</label>
                <input type="text" id="inputTotal" class="estilosInput" name="inputTotal"/>
                <br/>
                <button type='sumbit'>Agregar</button>
            </form>
            </div>
        </div>
    );


}

export default AgregarFactura;