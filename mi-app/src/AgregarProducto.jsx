import React, { useState } from 'react';
import Menu from './Menu';

const AgregarProducto = () =>{

    const [formData, setFormData] = useState({
        nombre: '',
        precio_unitario: '',
        categoria: '',
        cantidad: ''
      });          

      const enviarDatos = async () => {
        try {
          // Resto del código para enviar datos
          const response = await fetch('http://localhost:3001/api/producto/crearProducto', {
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
      };


    return(
        <div className='AgregarProducto'>
            <div>
                <Menu/>
            </div>
            <div className='form3'>
            <form>
                <label className="form-label">Nombre</label>
                <input type="text" id="nombre" class="estilosInput" name="nombre"value={formData.nombre}
            onChange={handleInputChange}/>
                <br/>
                <label className="form-label">Precio Unitario</label>
                <input type="number" id="precio_unitario" class="estilosInput" name="precio_unitario"value={formData.precio_unitario}
            onChange={handleInputChange}/>
                <br/>
                <label className="form-label">Categoria</label>
                <input type="text" id="categoria" class="estilosInput" name="categoria"value={formData.categoria}
            onChange={handleInputChange}/>
                <br/>
                <label className="form-label">Cantidad</label>
                <input type="number" id="cantidad" class="estilosInput" name="cantidad"value={formData.cantidad}
            onChange={handleInputChange}/>
                <br/>
                <button onClick={enviarDatos}>Agregar</button>
                
            </form>
            <div>
            <button type='sumbit'><a href="/producto">Volver</a></button>
            </div>
            </div>
        </div>
    );


}

export default AgregarProducto;