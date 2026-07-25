import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    course: '',
    location: '',
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          designation: formData.designation,
          course: formData.course,
          location: formData.location,
        }),
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setIsSuccess(true);
      setMessage(data.message || 'Registration saved successfully.');
      setFormData({ fullName: '', designation: '', course: '', location: '' });
    } catch (error) {
      const fallbackMessage = error instanceof Error ? error.message : 'Unable to save registration.';
      const friendlyMessage = fallbackMessage === 'Failed to fetch'
        ? 'Unable to reach the server. Please start the backend and try again.'
        : fallbackMessage;

      setIsSuccess(false);
      setMessage(friendlyMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card rounded-4 shadow-sm border-0">
              <div className="card-body p-5">
                <h2 className="fw-bold mb-3">Register</h2>
                <p className="text-muted mb-4">Fill in your registration details to save them in the database.</p>

                {message && (
                  <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} mb-4`}>
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Student or Instructor"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Course</label>
                    <input
                      type="text"
                      className="form-control"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="Course name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Your location"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary rounded-pill px-4" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Register'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
