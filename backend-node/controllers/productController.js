import { db } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};