import app from "./app.js"; // import the Express app
import pool from "./config/db.js";

const PORT = process.env.PORT || 3000; // use PORT from .env or default to 5000

const startServer = async () => {
  try {
    await pool.connect(); // Test the database connection

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
