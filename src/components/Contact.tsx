import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, QrCode } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-tech" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, white 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-gradient mb-4">
              Get In Touch
            </h1>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              Have questions about our Smart Security Robot? We'd love to hear from you!
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card-tech p-5 h-100 tech-shadow">
                <h3 className="fw-bold mb-4">Send us a message</h3>

                {submitted ? (
                  <div className="text-center py-5">
                    <div className="d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, var(--primary-medium) 0%, var(--accent-bright) 100%)', borderRadius: '50%', marginBottom: '1rem', animation: 'bounce 1s infinite' }}>
                      <CheckCircle style={{ width: '40px', height: '40px', color: 'white' }} />
                    </div>
                    <h4 className="fw-bold mb-2">Message Sent!</h4>
                    <p style={{ color: 'var(--text-light)' }}>Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="form-label fw-bold mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-control input-tech"
                        placeholder="John Doe"
                        style={{ borderWidth: '2px' }}
                      />
                    </div>

                    <div>
                      <label className="form-label fw-bold mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-control input-tech"
                        placeholder="john@example.com"
                        style={{ borderWidth: '2px' }}
                      />
                    </div>

                    <div>
                      <label className="form-label fw-bold mb-2">Message</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="form-control input-tech"
                        placeholder="Tell us about your inquiry..."
                        style={{ borderWidth: '2px' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-tech-primary w-100 fw-bold"
                      style={{ padding: '12px 0', fontSize: '1.05rem' }}
                    >
                      <Send style={{ width: '18px', height: '18px', marginRight: '8px' }} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="col-lg-6 d-flex flex-column gap-4">
              <div className="card-tech p-4 text-white tech-shadow" style={{ background: 'linear-gradient(135deg, var(--primary-medium) 0%, var(--secondary-purple) 100%)' }}>
                <h5 className="fw-bold mb-4">Contact Information</h5>

                <div className="d-flex flex-column gap-3">
                  <a
                    href="mailto:info@smartsecurityrobot.com"
                    className="d-flex align-items-center gap-3 p-3"
                    style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', textDecoration: 'none', color: 'white', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail style={{ width: '20px', height: '20px' }} />
                    </div>
                    <div>
                      <div className="fw-bold">Email</div>
                      <div className="opacity-75" style={{ fontSize: '0.9rem' }}>info@smartsecurityrobot.com</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-3 p-3"
                    style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', textDecoration: 'none', color: 'white', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Linkedin style={{ width: '20px', height: '20px' }} />
                    </div>
                    <div>
                      <div className="fw-bold">LinkedIn</div>
                      <div className="opacity-75" style={{ fontSize: '0.9rem' }}>Connect with us</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-3 p-3"
                    style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', textDecoration: 'none', color: 'white', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Github style={{ width: '20px', height: '20px' }} />
                    </div>
                    <div>
                      <div className="fw-bold">GitHub</div>
                      <div className="opacity-75" style={{ fontSize: '0.9rem' }}>View our code</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="card-tech p-4 tech-shadow">
                <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <QrCode style={{ width: '20px', height: '20px', color: 'var(--primary-medium)' }} />
                  Project Documentation
                </h5>

                <div style={{ aspectRatio: '1', background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--accent-purple)/10 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <div className="text-center">
                    <QrCode style={{ width: '80px', height: '80px', color: 'var(--primary-medium)', marginBottom: '0.5rem' }} />
                    <p style={{ color: 'var(--text-light)', fontWeight: '500', fontSize: '0.9rem', margin: 0 }}>Scan for Documentation</p>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', textAlign: 'center', margin: 0 }}>
                  Scan the QR code to access our complete project presentation and technical documentation
                </p>
              </div>

              <div className="card-tech p-4 text-white text-center tech-shadow" style={{ background: 'linear-gradient(135deg, var(--secondary-purple) 0%, var(--accent-purple) 100%)' }}>
                <h5 className="fw-bold mb-3">Office Hours</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p className="mb-0">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="mb-0">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="mb-0 opacity-75" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Response time: Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
