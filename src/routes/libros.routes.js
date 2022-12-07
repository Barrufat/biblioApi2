import { Router } from "express";
import {
  createLibro,
  deleteLibro,
  getLibro,
  getLibros,
  // updateEmployee,
} from "../controllers/libros.controller.js";

const router = Router();

// GET all Employees
router.get("/libros", getLibros);

// GET An Employee
router.get("/libros/:id", getLibro);

// DELETE An Employee
router.delete("/libros/:id", deleteLibro);

// INSERT An Employee
router.post("/libros", createLibro);

// router.patch("/libros/:id", updateEmployee);

export default router;