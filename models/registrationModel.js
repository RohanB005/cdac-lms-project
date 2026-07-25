import pool from '../config/db.js';

class RegistrationModel {
  static async createRegistration({ name, designation, course, location }) {
    const [result] = await pool.execute(
      'INSERT INTO registration (`Full Name`, `Designation`, `Course`, `Location`) VALUES (?, ?, ?, ?)',
      [name, designation, course, location]
    );

    return result;
  }
}

export default RegistrationModel;
