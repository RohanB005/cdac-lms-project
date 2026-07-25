function Contact() {
  return (
    <section className="page-shell" id="contact-page">
      <div className="container">
        <div className="page-hero contact-grid">
          <div className="contact-card">
            <span className="page-chip">Contact us</span>
            <h3>Let’s make the next step feel effortless.</h3>
            <p>
              Have a question about courses, registration, or the platform? Send us a message and we’ll respond shortly.
            </p>
            <ul className="contact-list">
              <li><strong>Email:</strong> support@cdaclms.com</li>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Address:</strong> CDAC Learning Hub, Mumbai, India</li>
            </ul>
          </div>

          <div className="form-card">
            <h3>Send a message</h3>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Your name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="you@example.com" />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5" placeholder="Tell us how we can help"></textarea>
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-primary rounded-pill px-4">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
