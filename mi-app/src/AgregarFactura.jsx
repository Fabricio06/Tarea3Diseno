import React, { useState } from 'react';
import Menu from './Menu';

const AgregarFactura = () =>{
    const [formData, setFormData] = useState({
        nombre_cliente: '',
        estado: '',
        fecha: '',
        total: ''
      });    

      function imprimirInformacion() {
        var formulario = document.getElementById("frmAgregarFactura");
        for (var i = 0; i < formulario.elements.length; i++) {
            console.log(formulario.elements[i].name + ": " + formulario.elements[i].value);
        }
    }      

      const enviarDatos = async () => {
        try {
          // Resto del código para enviar datos
          const response = await fetch('http://localhost:3001/api/factura/crearFactura', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
               });
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      };

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
        imprimirInformacion();
      };      

    return(
        <div className='AgregarFactura'>
            <div>
                <Menu/>
            </div>
            <div className='form3'>
            <form id='frmAgregarFactura'>
                <label className="form-label">Fecha</label>
                <input type="date" id="fecha" class="estilosInput" name="fecha" value={formData.inputFecha}
            onChange={handleInputChange}/>
                <br/>
                <label className="form-label">Cliente</label>
                <input type="text" id="nombre_cliente" class="estilosInput" name="nombre_cliente"value={formData.inputCliente}
            onChange={handleInputChange}/>
                <br/>
                <label className="form-label">Estado</label>
                <input type="text" id="estado" class="estilosInput" name="estado"value={formData.inputEstado}
            onChange={handleInputChange}/>
                <br/>
                <label className="form-label">Total</label>
                <input type="number" id="total" class="estilosInput" name="total"value={formData.inputTotal}
            onChange={handleInputChange}/>
                <br/>
                <button onClick={enviarDatos}>Agregar</button>
            </form>
            </div>
        </div>
    );


}

export default AgregarFactura;