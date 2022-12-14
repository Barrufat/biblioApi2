import { pool } from "../db.js";

export const getLibros = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM libros");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM libros WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Libro not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getCasilla = async (req, res) => {
  try {
    const { casilla } = req.params;
    const [rows] = await pool.query("SELECT * FROM libros WHERE casilla = ?", [casilla,]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Libro not found" });
    }

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getNombre = async (req, res) => {
  try {
    const { nombre } = req.params;
    const [rows] = await pool.query("SELECT * FROM libros WHERE nombre = ?", [nombre,]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Libro not found" });
    }

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getAutorx = async (req, res) => {
  try {
    const { autorx } = req.params;
    const [rows] = await pool.query("SELECT * FROM libros WHERE autorx = ?", [autorx,]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Libro not found" });
    }

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM libros WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Libro not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createLibro = async (req, res) => {
  const { nombre, autorx, genero, sinopsis, imagen, casilla } = req.body
  const [rows] = await pool.query('INSERT INTO libros (nombre, autorx, genero, sinopsis, imagen, casilla) VALUES (?, ?, ?, ?, ?, ?)', [nombre, autorx, genero, sinopsis, imagen, casilla])
  res.send({
    id:rows.insertId,
    nombre,
    autorx,
    genero,
    sinopsis,
    imagen,
    casilla
  })
};

// export const updateLibros = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, salary } = req.body;

//     const [result] = await pool.query(
//       "UPDATE Libros SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
//       [name, salary, id]
//     );

//     if (result.affectedRows === 0)
//       return res.status(404).json({ message: "Libros not found" });

//     const [rows] = await pool.query("SELECT * FROM Libros WHERE id = ?", [
//       id,
//     ]);

//     res.json(rows[0]);
//   } catch (error) {
//     return res.status(500).json({ message: "Something goes wrong" });
//   }
// };
