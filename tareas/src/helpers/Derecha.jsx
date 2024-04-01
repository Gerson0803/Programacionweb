import PropTypes from 'prop-types'; 
import './Derecha.css';  

const Derecha = ({ data }) => { 
  return (
   
      <div className="grid-container">
        {data.map((usuario, index) => (
          <div key={index} className="grid-item">
            <p>Nombre: {usuario.names}</p>
            <p>Teléfono: {usuario.telephone}</p>
            <img src={usuario.image} alt="" />
          </div>
        ))}
      </div>
    
  );
};

Derecha.propTypes = {
  data: PropTypes.array.isRequired
};

export default Derecha;
