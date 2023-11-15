import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { useParams } from 'react-router-dom';


const EditarFactura = () => {
  const API_URL = 'http://localhost:3001/api/factura'; // Ajusta la URL de la API según tu endpoint

  //const facturaId = location.state.id;
  const { id: facturaId } = useParams();

  const [formData, setFormData] = useState({
    nombre_cliente: '',
    estado: '',
    fecha: '',
    total: ''
  });

  useEffect(() => {
    // Realiza la solicitud a la API para obtener la factura según el ID
    fetch(`http://localhost:3001/api/factura/${facturaId}`)
      .then(response => response.json())
      .then(data => {
        // Actualiza el estado formData con los valores de la factura encontrada
        setFormData(data);
      })
      .catch(error => console.error('Error al obtener datos de la factura:', error));
  }, [facturaId]);

  const imprimirInformacion = () => {
    var formulario = document.getElementById("frmEditarFactura");
    for (var i = 0; i < formulario.elements.length; i++) {
      console.log(formulario.elements[i].name + ": " + formulario.elements[i].value);
    }
  };

  const enviarDatos = async () => {
    try {
      // Resto del código para enviar datos actualizados
      const response = await fetch(`${API_URL}/${facturaId}`, {
        method: 'PUT', // Usar el método PUT para actualizar la factura existente
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

  

  return (
    <div className='EditarFactura'>
      <div>
        <Menu/>
      </div>
      <div className='form3'>
        <form id='frmEditarFactura'>
          <label className="form-label">Fecha</label>
          <input type="date" id="fecha" className="estilosInput" name="fecha" value={formData.fecha} onChange={handleInputChange} />
          <br />
          <label className="form-label">Cliente</label>
          <input type="text" id="nombre_cliente" className="estilosInput" name="nombre_cliente" value={formData.nombre_cliente} onChange={handleInputChange} />
          <br />
          <label className="form-label">Estado</label>
          <input type="text" id="estado" className="estilosInput" name="estado" value={formData.estado} onChange={handleInputChange} />
          <br />
          <label className="form-label">Total</label>
          <input type="number" id="total" className="estilosInput" name="total" value={formData.total} onChange={handleInputChange} />
          <br />
          <button onClick={enviarDatos}>Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
};

export default EditarFactura;