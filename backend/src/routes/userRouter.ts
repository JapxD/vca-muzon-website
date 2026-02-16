import { Router } from "express";
import type { Request, Response } from "express";
import pool from "../config/db.js";
import bcrypt from "bcrypt";
import { userSchema } from "../schemas/userSchema.js";

const router = Router();

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// GET /users - list all users
router.get("/", async (req: Request, res: Response) => {
  try {
    // Example: Fetch users from an external API or database
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const parseResult = userSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res
      .status(400)
      .json({ error: "Invalid user data", details: parseResult.error.issues });
  }

  try {
    const { firstname, lastname, email, password, role } = req.body;
    const hash = await hashPassword(password);
    const result = await pool.query(
      "INSERT INTO users(firstname, lastname, email, password_hash, role) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [firstname, lastname, email, hash, role],
    );
    return res.status(201).json(result.rows[0]);
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    return res
      .status(500)
      .json({ error: "Failed to create user: " + error.message });
  }
});
export default router;
