import { db } from "../config/db.js";

export const createOrder = async (req, res) => {
  const { user_id, total } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING *",
      [user_id, total]
    );

    res.json(result.rows[0]);

  } catch (err) {
    res.status(500).json(err.message);
  }
};