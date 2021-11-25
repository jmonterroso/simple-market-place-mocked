const express = require("express");
const router = express.Router();

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  if (email === "admin@admin.com" && password === "admin") {
    res.json({
      user: {
        email: "admin@admin.com",
        name: "Jayson Monterroso",
      },
      token: "0399392002",
    });
  } else {
    res.status(401).json({ error: true });
  }
});

module.exports = router;
