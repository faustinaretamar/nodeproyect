import React, { useEffect, useState } from 'react';
import Pet from './pet';
import './stlye-components/pets.css';

const Pets = () => {
    const [pets, setPets] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/pets');
                const data = await response.json();
                setPets(data);
            } catch (error) {
                console.error('Error al obtener las mascotas:', error);
            }
        };

        fetchPets();
    }, []);

    const filteredPets = pets.filter(pet =>
        pet.name?.toLowerCase().includes(text)
    );

    return (
        <>
            <div className='header-section'>
                <h1 className='title-page-products'>Descubre Mascotas en Adopción</h1>
                <p className='subtitle-page-products'>
                    Encuentra a tu compañero perfecto entre las mascotas disponibles.
                </p>
            </div>

            <div className='search-container'>
                <input
                    type="text"
                    name="busqueda"
                    placeholder="Buscar mascotas..."
                    className="search-input"
                    onChange={(e) => setText(e.target.value.toLowerCase())}
                />
            </div>

            <section className="productpage">
                {filteredPets.length > 0 ? (
                    filteredPets.map(pet => <Pet key={pet.id} {...pet} />)
                ) : (
                    <p>No hay mascotas disponibles.</p>
                )}
            </section>
        </>
    );
};

export default Pets;
