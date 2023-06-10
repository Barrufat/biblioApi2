import express from "express"
import morgan from "morgan"
import cors from 'cors'

import librosRoutes from "./routes/libros.routes.js";
import indexRoutes from "./routes/index.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors()); //evita problemas al conectar desde otro servidor


// Routes
app.use("/", indexRoutes);
app.use("/api/libros", librosRoutes);
app.use("/api/usuarios", usuariosRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
