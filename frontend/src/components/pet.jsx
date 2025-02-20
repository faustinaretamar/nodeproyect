import './stlye-components/pet.css';
import { useNavigate } from 'react-router-dom';

function Pet({ id, name, age, size, description, location }) {
    const navigate = useNavigate();
    const handleViewDetails = () => {
        // Navegar a una nueva ruta para los detalles de la mascota
        navigate(`/pet/${id}`);
    };

    return (
        <div className="pet-card">
            <h3 className="pet-name">{name}</h3>
            <p className="pet-age">Edad: {age} años</p>
            <p className="pet-size">Tamaño: {size}</p>
            <p className="pet-description">{description}</p>
            <p className="pet-description">
                Puedes encontrarlo en: <a className="location">{location}</a>. Llamenos para obtener más información.
            </p>
        </div>
    );
    
}

export default Pet;
