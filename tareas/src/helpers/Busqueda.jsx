import  { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ContactoEncontrado from './ContactoEncontrado';
import Derecha from './Derecha';

const Busqueda = ({ data, setData }) => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);
  const [nuevoContacto, setNuevoContacto] = useState({ names: '', telephone: '', image: '' });

  const buscarNumero = () => {
    if (Array.isArray(data)) {
      const encontrado = data.find(contacto => contacto.telephone === numero);
      setResultado(encontrado);
    } else {
      console.error(' no es un array.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoContacto(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project', nuevoContacto);
      setData([...data, nuevoContacto]); // Actualiza los datos con el nuevo contacto
      setNuevoContacto({ names: '', telephone: '', image: '' }); // Reinicia el estado del formulario
    } catch (error) {
      console.error('Error al agregar nuevo contacto:', error);
    }
  };

  return (
    <div className='container'>
    <div className='left-section'>
      <div className="search-section">
        <h2>Búsqueda de Contacto</h2>
        <input
          type="text"
          placeholder="Número de Teléfono"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <button onClick={buscarNumero}>Buscar</button>
        <ContactoEncontrado resultado={resultado} /> 
      </div>

      <div className="add-contact-section">
        <h2>Agregar Nuevo Contacto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            name="names"
            value={nuevoContacto.names}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Número de Teléfono"
            name="telephone"
            value={nuevoContacto.telephone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            name="image"
            value={nuevoContacto.image}
            onChange={handleInputChange}
          />
          <button type="submit">Agregar Contacto</button>
        </form>
      </div>
    </div>

    <div className='right-section'>
      <Derecha data={data}/>
    </div>
  </div>
  );
};

Busqueda.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired
};

export default Busqueda;
