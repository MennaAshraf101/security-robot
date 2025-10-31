import { Target, Eye, Zap, Brain, Camera, Activity, Wifi } from 'lucide-react';

export default function About() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-tech" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, white 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-gradient mb-4">
              About the Smart Security Robot
            </h1>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              Innovation meets security in an autonomous solution designed to protect what matters most
            </p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div className="card-tech p-0 overflow-hidden tech-shadow">
                <div style={{ aspectRatio: '16 / 9', background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--accent-purple)/10 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="pulse-animation">
                    <Shield style={{ width: '120px', height: '120px', color: 'var(--primary-medium)' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="space-y-3">
                <div className="card-tech p-4">
                  <div className="d-flex gap-3 mb-3 align-items-center">
                    <div className="icon-tech flex-shrink-0">
                      <Target style={{ width: '28px', height: '28px' }} />
                    </div>
                    <h5 className="fw-bold mb-0">Project Goal</h5>
                  </div>
                  <p className="mb-0" style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                    To develop an intelligent, autonomous security robot that addresses the growing need for reliable, continuous surveillance. Our robot provides real-time threat detection and instant alerts.
                  </p>
                </div>

                <div className="card-tech p-4">
                  <div className="d-flex gap-3 mb-3 align-items-center">
                    <div className="icon-tech flex-shrink-0">
                      <Eye style={{ width: '28px', height: '28px' }} />
                    </div>
                    <h5 className="fw-bold mb-0">Vision</h5>
                  </div>
                  <p className="mb-0" style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                    To revolutionize security through intelligent automation, making advanced protection accessible and efficient for homes, businesses, and public spaces worldwide.
                  </p>
                </div>

                <div className="card-tech p-4">
                  <div className="d-flex gap-3 mb-3 align-items-center">
                    <div className="icon-tech flex-shrink-0">
                      <Zap style={{ width: '28px', height: '28px' }} />
                    </div>
                    <h5 className="fw-bold mb-0">Mission</h5>
                  </div>
                  <p className="mb-0" style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                    To deliver cutting-edge security technology that combines artificial intelligence, robotics, and IoT to create a safer environment for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tech" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gradient mb-5" style={{ fontSize: '2.5rem' }}>
            Technologies & Features
          </h2>

          <div className="row g-4">
            {[
              { icon: Brain, title: 'AI Detection', description: 'Machine learning algorithms for threat identification' },
              { icon: Camera, title: 'HD Cameras', description: 'High-definition vision with night mode capability' },
              { icon: Activity, title: 'Motion Sensors', description: 'Advanced sensors for precise movement detection' },
              { icon: Wifi, title: 'IoT Connected', description: 'Real-time cloud connectivity and data sync' },
            ].map((tech, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card-tech p-4 text-center tech-shadow-hover">
                  <div className="icon-tech mx-auto mb-3">
                    <tech.icon style={{ width: '28px', height: '28px' }} />
                  </div>
                  <h5 className="fw-bold mb-2">{tech.title}</h5>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tech" style={{ background: 'linear-gradient(135deg, var(--primary-medium) 0%, var(--secondary-purple) 100%)', color: 'white' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ fontSize: '2.5rem' }}>
            The Security Problem We Solve
          </h2>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <p className="lead mb-4 text-center" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Traditional security systems are limited by fixed camera positions, delayed response times, and the inability to distinguish between genuine threats and false alarms.
            </p>

            <p className="lead mb-4 text-center" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our Smart Security Robot combines mobility, artificial intelligence, and real-time communication to provide dynamic, intelligent protection that adapts to its environment and responds instantly to potential threats.
            </p>

            <p className="lead text-center fw-bold" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              The result? Comprehensive coverage, fewer false alarms, and immediate action when it matters most.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Shield(props: any) {
  return (
    <div {...props}>
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    </div>
  );
}
