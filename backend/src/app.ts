import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import jiraRoutes from "./routes/jiraRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman or server-to-server
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  }),
);

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express + TypeScript!" });
});

app.use("/api/jira", jiraRoutes);

export default app;
