import { Pet } from "../models/petModel.js";

const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las mascotas" });
  }
};

const getPetById = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);

    if (!pet) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }

    res.json(pet);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener la mascota", error: error.message });
  }
};

const addPet = (req, res) => {
  const { name, age, size, type, description, location } = req.body;  // Asegúrate de que estás extrayendo correctamente los campos del cuerpo
  if (!name || !age || !size || !type || !description || !location) {
    return res.status(400).json({ message: 'Faltan datos en la solicitud' });
  }

  // Crear nueva mascota (suponiendo que tienes un modelo de Pet)
  const newPet = new Pet({
    name,
    age,
    size,
    type,
    description,
    location
  });

  // Guardar en la base de datos
  newPet.save()
    .then(() => res.status(201).json(newPet))
    .catch((error) => res.status(500).json({ message: error.message }));
};

const updatePet = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updatedPet = await Pet.findByIdAndUpdate(id, body, { new: true });

    if (!updatedPet) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }

    res.json({
      message: "Mascota actualizada exitosamente",
      updatedPet,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al actualizar la mascota", error: error.message });
  }
};

const deletePet = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPet = await Pet.findByIdAndDelete(id);

    if (!deletedPet) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }

    res.json({ message: "Mascota eliminada exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al eliminar la mascota", error: error.message });
  }
};

export { getAllPets, getPetById, addPet, updatePet, deletePet };
