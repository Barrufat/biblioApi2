import { Router } from "express";
import {
  createLibro,
  deleteLibro,
  getLibro,
  getLibros,
  getCasilla,
  getAutorx,
  getNombre
  // updateEmployee,
} from "../controllers/libros.controller.js";

const router = Router();

// GET all Employees
router.get("/libros", getLibros);

// GET An Employee
router.get("/:id", getLibro);

// GET A Casilla
router.get("/casilla/:casilla", getCasilla);
router.get("/autorx/:autorx", getAutorx);
router.get("/nombre/:nombre", getNombre);

// DELETE An Employee
router.delete("/:id", deleteLibro);

// INSERT An Employee
router.post("/", createLibro);

// router.patch("/libros/:id", updateEmployee);

export default router;
