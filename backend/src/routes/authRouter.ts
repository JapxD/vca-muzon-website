import express from "express";
import pool from "../config/db.js";
import bcrypt from "bcrypt";
import { authSchema } from "../schemas/authSchema.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
  // Validate request body
  const parseResult = authSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.issues });
  }

  const { email, password } = parseResult.data;

  try {
    // Find user by email
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = result.rows[0];

    // Compare password
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      }, // payload
      process.env.JWT_SECRET as string, // secret key from .env
      { expiresIn: "24h" }, // expiry time
    );

    // Success — issue token or session
    // For now, just return user info (excluding password)
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
