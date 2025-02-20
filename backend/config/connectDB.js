import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno

const URI_DB = process.env.URI_DB;

const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Conexión a la base de datos exitosa!");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

export { connectDB };
