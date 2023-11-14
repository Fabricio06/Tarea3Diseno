import React, { useState, useEffect } from 'react';
import Menu from './Menu';

const Factura = () => {
  const [idFactura, setIdFactura] = useState('');
  const [facturaData, setFacturaData] = useState(null);
  const [allFacturas, setAllFacturas] = useState([]);

  const API_URL = 'http://localhost:3001/api/factura'; // Ajusta la URL de la API según tu endpoint

  const fetchAllFacturas = () => {
    fetch(`${API_URL}/`)
      .then(response => response.json())
      .then(data => setAllFacturas(data))
      .catch(error => console.error('Error al obtener todas las facturas:', error));
  };

  useEffect(() => {
    // Obtener todas las facturas al cargar la página
    fetchAllFacturas();
  }, []);

  useEffect(() => {
    if (idFactura) {
      // Realiza la solicitud a la API para obtener la factura según el ID
      fetch(`${API_URL}/${idFactura}`)
        .then(response => response.json())
        .then(data => {
          // Actualiza el estado allFacturas con un arreglo que solo contiene la factura encontrada
          setAllFacturas([data]);
        })
        .catch(error => console.error('Error al obtener datos de la factura:', error));
    }
  }, [idFactura]);

  const handleInputChange = (event) => {
    setIdFactura(event.target.value);
  };

  const handleSearchClick = () => {
    // Cuando se hace clic en "Buscar", vuelve a cargar todas las facturas
    fetchAllFacturas();
  };

  const handleDeleteClick = () => {
    // Verifica si hay una factura seleccionada antes de intentar eliminar
    if (idFactura) {
      // Realiza la solicitud a la API para obtener la factura según el ID
      fetch(`${API_URL}/${idFactura}`)
        .then(response => response.json())
        .then(data => {
          if (data) {
            // Si se encuentra la factura, procede a eliminarla
            fetch(`${API_URL}/${idFactura}`, {
              method: 'DELETE',
            })
              .then(response => {
                if (response.ok) {
                  // Eliminación exitosa, vuelve a cargar todas las facturas
                  fetchAllFacturas();
                  setFacturaData(null); // Limpia los datos de la factura después de eliminar
                } else {
                  console.error('Error al eliminar la factura:', response.statusText);
                }
              })
              .catch(error => console.error('Error al eliminar la factura:', error));
          } else {
            console.warn('No se encontró ninguna factura con el ID proporcionado.');
          }
        })
        .catch(error => console.error('Error al obtener datos de la factura:', error));
    } else {
      console.warn('No hay ID de factura proporcionado para eliminar.');
    }
  };

  return (
    <div className='Factura'>
      <div>
        <Menu />
      </div>
      <div className='form2'>
        <form action="./php/formulario.php" method="post" autoComplete="off">
          <label htmlFor="inputNombreFactura">Id factura:</label>
          <input type="text" id="inputNombreFactura" className="estilosInput" name="inputNombreFactura" onChange={handleInputChange} />
          <button type='button' onClick={handleSearchClick}>Buscar</button>
        </form>
        <table>
          <thead>
            <tr>
              <th><b>#</b></th>
              <th><b>Fecha</b></th>
              <th><b>Cliente</b></th>
              <th><b>Vendedor</b></th>
              <th><b>Estado</b></th>
              <th><b>Total</b></th>
            </tr>
          </thead>
          <tbody>
            {facturaData && (
              <tr>
                <td>{facturaData.id}</td>
                <td>{facturaData.fecha}</td>
                <td>{facturaData.nombre_cliente}</td>
                <td>{facturaData.vendedor}</td>
                <td>{facturaData.estado}</td>
                <td>{facturaData.total}</td>
              </tr>
            )}
            {allFacturas.map((factura) => (
              <tr key={factura.id}>
                <td>{factura.id}</td>
                <td>{factura.fecha}</td>
                <td>{factura.nombre_cliente}</td>
                <td>{factura.vendedor}</td>
                <td>{factura.estado}</td>
                <td>{factura.total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            {/* Agrega cualquier contenido adicional en el pie de página si es necesario */}
          </tfoot>
        </table>
        <div className='Agregar'>
          <button type='submit'><a href="agregarFactura">Agregar Factura</a></button>
          <button type='button' onClick={handleDeleteClick}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default Factura;