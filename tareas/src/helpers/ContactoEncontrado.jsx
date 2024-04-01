import PropTypes from 'prop-types';
import "./Contacto.css"; 

const ContactoEncontrado = ({ resultado }) => {
  return (
    <div className='contacto-container'>
      {resultado ? (
        <div className='contacto-info'>
          <h3>Contacto Encontrado:</h3>
          <p>Nombre: {resultado.names}</p>
          <p>Número de Teléfono: {resultado.telephone}</p>
          <img src={resultado.image} alt="Imagen de perfil" />
        </div>
      ) : (
        <div className='contacto-empty'>
          No se encontró ningún contacto con este número.
        </div>
      )}
    </div>
  );
};

ContactoEncontrado.propTypes = {
  resultado: PropTypes.shape({
    names: PropTypes.string,
    telephone: PropTypes.string,
    image: PropTypes.string
  })
};

export default ContactoEncontrado;
