import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import pool from './config/db.js';
import registrationRoutes from './routes/registrationRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Student Registration API is running' });
});

app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).json({ success: true, database: 'Connected', message: 'MySQL Database Connected Successfully' });
  } catch (error) {
    console.error('Database Connection Error:', error.message);
    res.status(500).json({ success: false, database: 'Disconnected', message: 'Database connection failed.' });
  }
});

app.use('/api/registration', registrationRoutes);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ success: false, message: 'Invalid JSON format' });
  }
  next(err);
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'API endpoint not found' });
});

app.use(errorHandler);

async function startServer() {
  try {
    await pool.query('SELECT 1');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS registration (
        \`Full Name\` VARCHAR(255) NOT NULL,
        \`Designation\` VARCHAR(255) NOT NULL,
        \`Course\` VARCHAR(255) NOT NULL,
        \`Location\` VARCHAR(255) NOT NULL
      )
    `);

    console.log('✅ Connected to MySQL Database');
  } catch (error) {
    console.error('⚠️ MySQL is unavailable; the API will respond with database errors until it is reachable.');
    console.error(error.message);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

startServer();