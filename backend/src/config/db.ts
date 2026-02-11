// Import the Pool class from node-postgres
import { Pool } from 'pg';
import 'dotenv/config';

// Create a new pool instance with configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
  max: 10, // maximum number of clients in the pool
  idleTimeoutMillis: 30000, // close idle clients after 30 seconds
  connectionTimeoutMillis: 2000 // return an error after 2 seconds if connection could not be established
});

// Gracefully shut down the pool when your app exits
process.on('SIGINT', async () => {
  await pool.end();
  console.log('Database pool has ended');
  process.exit(0);
});

export default pool;