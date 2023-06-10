import { Router } from "express";
import {
  createUsuario,
  deleteUsuario,
  getUsuario,
  getUsuarios,
  getNation,
  getRol,
  getName
  // updateEmployee,
} from "../controllers/usuarios.controller.js";

const router = Router();

// GET all Employees
router.get("/", getUsuarios);

// GET An Employee
router.get("/:id", getUsuario);

// GET A Casilla
router.get("/nation/:nation", getNation);
router.get("/rol/:rol", getRol);
router.get("/name/:name", getName);

// DELETE An Employee
router.delete("/:id", deleteUsuario);

// INSERT An Employee
router.post("/", createUsuario);

// router.patch("/libros/:id", updateEmployee);

export default router;
