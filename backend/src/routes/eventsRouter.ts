import { Router } from "express";
import type { Request, Response } from "express";
import pool from "../config/db.js";

const router = Router();

// GET /users - list all events
router.get("/", async (req: Request, res: Response) => {
  try {
    // Example: Fetch users from an external API or database
    const result = await pool.query("SELECT * FROM events");
    res.status(200).json(result.rows);
  } catch (error: any) {
    console.error("Error fetching events:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
