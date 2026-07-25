import pool from '../config/db.js';

try {
  const [result] = await pool.execute(
    'INSERT INTO registration (`Full Name`, `Designation`, `Course`, `Location`) VALUES (?, ?, ?, ?)',
    ['Test User', 'Student', 'React', 'Pune']
  );
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error.code);
  console.error(error.message);
} finally {
  await pool.end();
}
