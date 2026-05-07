import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [nombre, email, hashed]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    console.log("Email buscado:", email);        // 👈
    console.log("Usuario encontrado:", result.rows[0]); // 👈

    if (result.rows.length === 0)
      return res.status(400).json({ msg: "Usuario no existe" });

    const user = result.rows[0];

    console.log("Password ingresado:", password);      // 👈
    console.log("Hash en BD:", user.password);


    const match = await bcrypt.compare(password, user.password);

    console.log("Match resultado:", match); 

    if (!match)
      return res.status(400).json({ msg: "Password incorrecto" });

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: { id: user.id, nombre: user.name, email: user.email,welcome_seen: user.welcome_seen }
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};