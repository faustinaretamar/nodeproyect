import mongoose from "mongoose";

// Definimos el esquema para las mascotas
const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      min: 0, // Edad mínima
    },
    size: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true, // Ejemplo: "La Plata, Buenos Aires"
    },
  },
  {
    versionKey: false,
  }
);

// Creamos el modelo basado en el esquema
const Pet = mongoose.model("Pet", petSchema);

export { Pet };
