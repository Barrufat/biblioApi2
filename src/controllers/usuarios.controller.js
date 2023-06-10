import { pool } from "../db.js";

export const getUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Usuario not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getNation = async (req, res) => {
  try {
    const { nation } = req.params;
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE nation = ?", [nation,]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Usuarios not found" });
    }

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getName = async (req, res) => {
  try {
    const { name } = req.params;
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE name = ?", [name,]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Usuario not found" });
    }

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getRol = async (req, res) => {
  try {
    const { rol } = req.params;
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE rol = ?", [rol,]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Usuario not found" });
    }

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Libro not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createUsuario = async (req, res) => {
  const { name, password, nation, rol } = req.body
  const [rows] = await pool.query('INSERT INTO usuarios (name, password, nation, rol) VALUES (?, ?, ?, ?)', [name, password, nation, rol])
  res.send({
    id:rows.insertId,
    name, 
    password, 
    nation, 
    rol
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
