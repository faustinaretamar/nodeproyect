import axios from "axios";

const BASE_URL_API = "http://localhost:3001/api/pets";

// Obtener todas las mascotas
const getAllPets = async () => {
  try {
    const response = await axios.get(BASE_URL_API);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las mascotas:", error.message);
    return [];
  }
};

// Agregar una nueva mascota
const addPet = async (pet) => {
  try {
    const response = await axios.post(BASE_URL_API, pet);
    return response.data;
  } catch (error) {
    console.error("Error al agregar la mascota:", error.response?.data || error.message);
    throw error; // Lanza el error para que el frontend pueda manejarlo
  }
};

// Actualizar una mascota
const updatePet = async (id, pet) => {
  try {
    const response = await axios.patch(`${BASE_URL_API}/${id}`, pet);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la mascota:", error.response?.data || error.message);
    throw error; // Lanza el error para manejo en el frontend
  }
};

// Eliminar una mascota
const deletePet = async (id) => {
  try {
    await axios.delete(`${BASE_URL_API}/${id}`);
    return { message: "Mascota eliminada exitosamente" };
  } catch (error) {
    console.error("Error al eliminar la mascota:", error.response?.data || error.message);
    throw error;
  }
};

export { getAllPets, addPet, updatePet, deletePet };
