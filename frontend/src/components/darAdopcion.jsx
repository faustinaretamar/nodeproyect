import React, { useState } from "react";
import { addPet } from "../services/api"; // Importamos la función de agregar mascota
import "./stlye-components/adoption.css";

function GiveForAdoption() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    size: "",
    type: '',
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPet(formData); // Llamada a la función para enviar los datos al backend
      alert("¡Mascota registrada para adopción!");
      setFormData({
        name: "",
        age: "",
        size: "",
        type: '',
        description: "",
        location: "",
      });
    } catch (error) {
      alert("Hubo un error al registrar la mascota. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="adoption-container">
      <h1 className="adoption-title">Dar en adopción</h1>
      <p className="adoption-description">
        Completa el formulario para registrar una mascota en busca de un hogar.
      </p>
      <form onSubmit={handleSubmit} className="adoption-form">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="type">Especie:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="pequeño">Perro</option>
          <option value="mediano">Gato</option>
          <option value="grande">Otro</option>
        </select>

        <label htmlFor="age">Edad:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="size">Tamaño:</label>
        <select
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Ubicación:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <button type="submit" className="adoption-submit">
          Registrar Mascota
        </button>
      </form>
    </div>
  );
}

export default GiveForAdoption;
