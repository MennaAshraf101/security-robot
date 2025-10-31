import { Play, Camera } from 'lucide-react';

export default function Demo() {
  const galleryImages = [
    { title: 'Robot Prototype', description: 'Initial build stage', emoji: '🤖' },
    { title: 'Testing Phase', description: 'Motion detection tests', emoji: '🔬' },
    { title: 'UI Dashboard', description: 'Control panel interface', emoji: '💻' },
    { title: 'Night Vision', description: 'Low-light operation', emoji: '🌙' },
    { title: 'Alert System', description: 'Real-time notifications', emoji: '🔔' },
    { title: 'Field Deployment', description: 'On-site testing', emoji: '🏢' },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-tech" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, white 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-gradient mb-4">
              Demo & Gallery
            </h1>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              Watch our robot in action and explore the development journey
            </p>
          </div>

          <div className="card-tech p-0 overflow-hidden tech-shadow mb-5">
            <div style={{ aspectRatio: '16 / 9', background: 'linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="mb-4" style={{ position: 'relative' }}>
                  <div className="pulse-animation">
                    <Camera style={{ width: '120px', height: '120px', color: 'white' }} />
                  </div>
                </div>

                <button className="btn btn-tech-primary fw-bold" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>
                  <Play style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                  Watch Demo Video
                </button>

                <p style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem' }}>
                  See how our robot detects and responds to security threats in real-time
                </p>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, var(--primary-medium) 0%, var(--secondary-purple) 100%)', color: 'white', padding: '2rem' }}>
              <div className="row text-center">
                <div className="col-md-4">
                  <h3 className="display-6 fw-bold">360°</h3>
                  <p className="opacity-75 mb-0">Vision Coverage</p>
                </div>
                <div className="col-md-4">
                  <h3 className="display-6 fw-bold">&lt;2s</h3>
                  <p className="opacity-75 mb-0">Alert Response Time</p>
                </div>
                <div className="col-md-4">
                  <h3 className="display-6 fw-bold">95%</h3>
                  <p className="opacity-75 mb-0">Detection Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tech" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gradient mb-5" style={{ fontSize: '2.5rem' }}>
            Development Gallery
          </h2>

          <div className="row g-4 mb-5">
            {galleryImages.map((item, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="card-tech overflow-hidden tech-shadow-hover h-100">
                  <div style={{ aspectRatio: '1', background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--accent-purple)/10 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ transition: 'transform 0.3s ease', fontSize: '4rem' }} className="glow-effect">
                      {item.emoji}
                    </div>
                  </div>

                  <div className="p-4">
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tech" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, white 100%)' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card-tech p-4 h-100 tech-shadow">
                <h4 className="fw-bold mb-4">Key Features Demonstrated</h4>
                <ul className="list-unstyled">
                  {[
                    'Autonomous navigation and patrol',
                    'Real-time threat detection',
                    'HD video streaming',
                    'Instant alert notifications',
                    'Night vision capability',
                    'Remote control interface',
                  ].map((feature, idx) => (
                    <li key={idx} className="mb-3 d-flex gap-2 align-items-start">
                      <span style={{ width: '6px', height: '6px', background: 'linear-gradient(135deg, var(--primary-medium) 0%, var(--accent-bright) 100%)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-light)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card-tech p-4 h-100 tech-shadow" style={{ background: 'linear-gradient(135deg, var(--secondary-purple) 0%, var(--accent-purple) 100%)', color: 'white', border: 'none' }}>
                <h4 className="fw-bold mb-4">Test Results</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {[
                    { label: 'Motion Detection', percent: 98 },
                    { label: 'Fire Detection', percent: 95 },
                    { label: 'Weapon Recognition', percent: 92 },
                    { label: 'System Uptime', percent: 99.9 },
                  ].map((test, idx) => (
                    <div key={idx}>
                      <div className="d-flex justify-content-between mb-2">
                        <span>{test.label}</span>
                        <span className="fw-bold">{test.percent}%</span>
                      </div>
                      <div style={{ height: '12px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            background: 'white',
                            borderRadius: '10px',
                            width: `${test.percent}%`,
                            transition: 'width 0.6s ease',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
