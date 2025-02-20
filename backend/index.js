import express from "express";
import cors from "cors";
import { petRouter } from "./routes/petRoutes.js";
import { connectDB } from "./config/connectDB.js";

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

// Configurar CORS para aceptar todos los métodos, orígenes y encabezados
app.use(cors({
  origin: '*',  // Permite todas las solicitudes de cualquier origen
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rutas
app.use("/api/pets", petRouter);

// Conectar a la base de datos y escuchar
connectDB();
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
