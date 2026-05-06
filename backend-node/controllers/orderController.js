import { db } from "../config/db.js";

export const createOrder = async (req, res) => {
  const { user_id, total, direccion, metodo_pago } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO orders (user_id, total, direccion, metodo_pago)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [user_id, total, direccion, metodo_pago]
    );

    res.json(result.rows[0]);

  } catch (err) {
    res.status(500).json(err.message);
  }
};