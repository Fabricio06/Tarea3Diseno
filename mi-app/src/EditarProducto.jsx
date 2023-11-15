import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { useParams } from 'react-router-dom';

const EditarProducto = () => {
  const API_URL = 'http://localhost:3001/api/producto'; // Ajusta la URL de la API según tu endpoint

  //const productoId = location.state.id;
  const { id: productoId } = useParams();

  const [formData, setFormData] = useState({
    nombre: '',
    precio_unitario: '',
    categoria: '',
    cantidad: ''
  });

  useEffect(() => {
    // Realiza la solicitud a la API para obtener la producto según el ID
    fetch(`http://localhost:3001/api/producto/${productoId}`)
      .then(response => response.json())
      .then(data => {
        // Actualiza el estado formData con los valores de la producto encontrada
        setFormData(data);
      })
      .catch(error => console.error('Error al obtener datos de la producto:', error));
  }, [productoId]);


  const enviarDatos = async () => {
    try {
      // Resto del código para enviar datos actualizados
      const response = await fetch(`${API_URL}/${productoId}`, {
        method: 'PUT', // Usar el método PUT para actualizar la producto existente
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
  };

  return (
    <div className='Editarproducto'>
      <div>
        <Menu/>
      </div>
      <div className='form3'>
        <form id='frmEditarproducto'>
          <label className="form-label">Nombre</label>
          <input type="text" id="nombre" className="estilosInput" name="nombre" value={formData.nombre} onChange={handleInputChange} />
          <br />
          <label className="form-label">Precio_Unitario</label>
          <input type="number" id="precio_unitario" className="estilosInput" name="precio_unitario" value={formData.precio_unitario} onChange={handleInputChange} />
          <br />
          <label className="form-label">Estado</label>
          <input type="text" id="categoria" className="estilosInput" name="categoria" value={formData.categoria} onChange={handleInputChange} />
          <br />
          <label className="form-label">Total</label>
          <input type="number" id="cantidad" className="estilosInput" name="cantidad" value={formData.cantidad} onChange={handleInputChange} />
          <br />
          <button onClick={enviarDatos}>Guardar Cambios</button>
        </form>
        <div>
            <button type='sumbit'><a href="factura">Volver</a></button>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;