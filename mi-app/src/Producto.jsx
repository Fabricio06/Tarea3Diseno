import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { Navigate, useNavigate } from 'react-router-dom';


const Producto = () =>{
    const [idProducto, setIdProducto] = useState('');
    const [productoData, setProductoData] = useState(null);
    const [allProductos, setAllProductos] = useState([]);

    const navigate = useNavigate();

    const API_URL = 'http://localhost:3001/api/producto'; // Ajusta la URL de la API según tu endpoint
  
    const fetchAllProductos = () => {
      fetch(`${API_URL}/`)
        .then(response => response.json())
        .then(data => setAllProductos(data))
        .catch(error => console.error('Error al obtener todas las prodcutos:', error));
    };
  
    const [updateData, setUpdateData] = useState({
      nombre: '',
      precio_unitario: '',
      categoria: '',
      cantidad: '',
    });    

    useEffect(() => {
        // Obtener todas las Productos al cargar la página
        fetchAllProductos();
      }, []);
    
      useEffect(() => {
        if (idProducto) {
          // Realiza la solicitud a la API para obtener el Producto según el ID
          fetch(`${API_URL}/${idProducto}`)
            .then(response => response.json())
            .then(data => {
              // Actualiza el estado allProductos con un arreglo que solo contiene la Producto encontrada
              setAllProductos([data]);
            })
            .catch(error => console.error('Error al obtener datos del Producto:', error));
        }
      }, [idProducto]);    

      const handleInputChange = (event) => {
        setIdProducto(event.target.value);
      };
    
      const handleSearchClick = () => {
        // Cuando se hace clic en "Buscar", vuelve a cargar todas las Producto
        fetchAllProductos();
      };
    
      const handleDeleteClick = () => {
        // Verifica si hay una Producto seleccionada antes de intentar eliminar
        if (idProducto) {
          // Realiza la solicitud a la API para obtener la Producto según el ID
          fetch(`${API_URL}/${idProducto}`)
            .then(response => response.json())
            .then(data => {
              if (data) {
                // Si se encuentra la Producto, procede a eliminarla
                fetch(`${API_URL}/${idProducto}`, {
                  method: 'DELETE',
                })
                  .then(response => {
                    if (response.ok) {
                      // Eliminación exitosa, vuelve a cargar todas las Productos
                      fetchAllProductos();
                      setProductoData(null); // Limpia los datos de la Producto después de eliminar
                    } else {
                      console.error('Error al eliminar el Producto:', response.statusText);
                    }
                  })
                  .catch(error => console.error('Error al eliminar la Producto:', error));
              } else {
                console.warn('No se encontró ninguna Producto con el ID proporcionado.');
              }
            })
            .catch(error => console.error('Error al obtener datos de la Producto:', error));
        } else {
          console.warn('No hay ID de Producto proporcionado para eliminar.');
        }
      };

      const handleEditClick = (productoId) => {
        // Cuando se hace clic en "Editar", navega a la ruta de editar producto con el ID correspondiente
        navigate(`/editar1/${productoId}`, { state: { id: productoId } });
      };        


    return(
        <div className='Producto'>
            <div>
                <Menu/>
            </div>
            <div className='form2'>
            <form>
                <label for="inputNombreProducto">Id producto:</label>
                <input type="text" id="inputNombreProducto" class="estilosInput" name="inputNombreProducto" onChange ={handleInputChange}/>
                <button type='button' onClick={handleSearchClick}>Actualizar</button>
            </form>
            <table>
                <thead>
                    <td><b>id</b></td>
                    <td><b>Nombre</b></td>
                    <td><b>Precio Unitario</b></td>
                    <td><b>Categoria</b></td>
                    <td><b>Cantidad</b></td>
                </thead>
                <tbody>
                {productoData && (
              <tr>
                <td>{productoData.id}</td>
                <td>{productoData.nombre}</td>
                <td>{productoData.precio_unitario}</td>
                
                <td>{productoData.categoria}</td>
                <td>{productoData.cantidad}</td>
              </tr>
            )}
            {allProductos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio_unitario}</td>
                <td>{producto.categoria}</td>
                <td>{producto.cantidad}</td>
                <td>
                {/* Agrega el botón "Editar" como un enlace a la página de edición */} 
                <button onClick={() => handleEditClick(producto.id)}> {/* Crea un botón que llame a la función handleEditClick con el ID del producto */}
                      Editar
                    </button>
              </td>
              </tr>
            ))}                    
                </tbody>
                <tfoot>

                </tfoot>
            </table>
            <div className='Agregar'>
            <button type='sumbit'><a href="agregarProducto">Agregar Producto</a></button>
            </div>
            <div className='Eliminar'>
            <button type='button' onClick={handleDeleteClick}>Eliminar</button>
            </div>
           </div>
        </div>
    );
}

export default Producto;