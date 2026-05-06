import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// ACTUALIZAR welcome_seen
router.patch("/:id/welcome", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query(
      "UPDATE users SET welcome_seen = true WHERE id = $1",
      [id]
    );

    res.json({ success: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error actualizando usuario" });
  }
});

export default router;