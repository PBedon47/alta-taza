import express from "express";
const router = express.Router();
// Importamos 'db' desde la carpeta config y con la extensión .js
import { db } from "../config/db.js"; 

// 👉 ACTUALIZAR welcome_seen
router.patch("/:id/welcome", async (req, res) => {
  const { id } = req.params;

  try {
    // IMPORTANTE: En PostgreSQL se usa $1, no el signo de interrogación ?
    await db.query(
      "UPDATE users SET welcome_seen = true WHERE id = $1",
      [id]
    );

    res.json({ success: true });

  } catch (error) {
    console.error("Error en DB:", error);
    res.status(500).json({ error: "Error actualizando usuario" });
  }
});

// Exportación moderna
export default router;