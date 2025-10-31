import { Play, Shield, Eye, Zap, Brain, Lock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      <section className="section-tech" style={{ paddingTop: '120px', background: 'linear-gradient(135deg, #f8f9fa 0%, white 50%, #f0f2f5 100%)' }}>
        <div className="container">
          <div className="text-center mb-5 fade-in">
            <div className="mb-4">
              <div className="d-inline-flex align-items-center justify-content-center glow-effect" style={{ width: '140px', height: '140px', borderRadius: '20px', background: 'linear-gradient(135deg, var(--primary-medium) 0%, var(--accent-bright) 100%)', marginBottom: '20px' }}>
                <Shield style={{ width: '80px', height: '80px', color: 'white' }} />
              </div>
            </div>

            <h1 className="display-4 fw-bold mb-4 text-gradient" style={{ fontSize: '3.5rem', letterSpacing: '-1px' }}>
              Smart Security Robot
            </h1>

            <p className="h4 mb-4" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>
              Your Eyes on Duty 24/7
            </p>

            <p className="lead mb-5" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              An autonomous security robot powered by advanced AI that detects motion, identifies threats, and sends real-time alerts to keep your premises safe around the clock.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
              <button
                onClick={() => onNavigate('demo')}
                className="btn btn-tech-primary fw-bold"
                style={{ padding: '12px 30px', fontSize: '1.1rem' }}
              >
                <Play style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                View Demo
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="btn btn-tech-secondary fw-bold"
                style={{ padding: '12px 30px', fontSize: '1.1rem' }}
              >
                Explore Features
              </button>
            </div>

            <div className="feature-grid">
              <div className="card-tech p-4 tech-shadow-hover">
                <div className="icon-tech mx-auto mb-3">
                  <Eye style={{ width: '32px', height: '32px' }} />
                </div>
                <h5 className="fw-bold mb-2">24/7 Monitoring</h5>
                <p className="mb-0" style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                  Continuous surveillance with intelligent motion detection
                </p>
              </div>

              <div className="card-tech p-4 tech-shadow-hover">
                <div className="icon-tech mx-auto mb-3">
                  <Brain style={{ width: '32px', height: '32px' }} />
                </div>
                <h5 className="fw-bold mb-2">AI-Powered</h5>
                <p className="mb-0" style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                  Advanced threat detection using machine learning
                </p>
              </div>

              <div className="card-tech p-4 tech-shadow-hover">
                <div className="icon-tech mx-auto mb-3">
                  <Zap style={{ width: '32px', height: '32px' }} />
                </div>
                <h5 className="fw-bold mb-2">Instant Alerts</h5>
                <p className="mb-0" style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                  Real-time notifications via SMS and push notifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tech" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gradient mb-5" style={{ fontSize: '2.5rem' }}>
            Quick Access
          </h2>

          <div className="row g-4">
            {[
              { icon: Shield, label: 'About Robot', page: 'about' },
              { icon: Lock, label: 'Dashboard', page: 'dashboard' },
              { icon: Play, label: 'View Demo', page: 'demo' },
              { icon: Eye, label: 'Meet Team', page: 'team' },
            ].map((item, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <button
                  onClick={() => onNavigate(item.page)}
                  className="card-tech w-100 p-5 text-center tech-shadow-hover"
                  style={{ border: 'none', background: 'white', cursor: 'pointer' }}
                >
                  <div className="icon-tech mx-auto mb-3">
                    <item.icon style={{ width: '28px', height: '28px' }} />
                  </div>
                  <h5 className="fw-bold">{item.label}</h5>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
