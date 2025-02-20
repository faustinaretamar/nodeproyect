import { Router } from "express";
import {
  getAllPets,
  getPetById,
  addPet,
  updatePet,
  deletePet,
} from "../controllers/PetsControllers.js";

const petRouter = Router();

// Obtener todas las mascotas
petRouter.get("/", getAllPets);

// Obtener una mascota mediante su id
petRouter.get("/:id", getPetById);

// Agregar una nueva mascota
petRouter.post("/", addPet);

// Actualizar una mascota
petRouter.patch("/:id", updatePet);

// Borrar una mascota
petRouter.delete("/:id", deletePet);

export { petRouter };
