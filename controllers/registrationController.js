import RegistrationModel from '../models/registrationModel.js';

export const registerUser = async (req, res, next) => {
  try {
    const { name, designation, course, location } = req.body;

    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedDesignation = typeof designation === 'string' ? designation.trim() : '';
    const trimmedCourse = typeof course === 'string' ? course.trim() : '';
    const trimmedLocation = typeof location === 'string' ? location.trim() : '';

    if (!trimmedName || !trimmedDesignation || !trimmedCourse || !trimmedLocation) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    await RegistrationModel.createRegistration({
      name: trimmedName,
      designation: trimmedDesignation,
      course: trimmedCourse,
      location: trimmedLocation,
    });

    return res.status(201).json({
      success: true,
      message: 'Registration successful',
    });
  } catch (error) {
    if (error.code === 'ECONNREFUSED' || error.code === 'ER_ACCESS_DENIED_ERROR' || error.code === 'ER_BAD_DB_ERROR') {
      return res.status(500).json({
        success: false,
        message: 'Database connection failed.',
      });
    }

    next(error);
  }
};
