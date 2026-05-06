const express = require("express");
const router = express.Router();
const db = require("../db"); // ajusta según tu conexión

// 👉 ACTUALIZAR welcome_seen
router.patch("/:id/welcome", async (req, res) => {
  const { id } = req.params;

  try {
    await db.query(
      "UPDATE users SET welcome_seen = true WHERE id = ?",
      [id]
    );

    res.json({ success: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error actualizando usuario" });
  }
});

module.exports = router;