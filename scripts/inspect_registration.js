import pool from '../config/db.js';

try {
  const [rows] = await pool.query('DESCRIBE registration');
  console.log(JSON.stringify(rows, null, 2));
} catch (error) {
  console.error(error.code);
  console.error(error.message);
} finally {
  await pool.end();
}
