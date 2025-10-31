import { Linkedin, Github, Cpu, User, Palette } from 'lucide-react';
import { TeamMember } from '../types';

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Alex Hardware',
      role: 'Hardware Engineer',
      image: '⚙️',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    {
      name: 'Sam AI',
      role: 'AI Developer',
      image: '🤖',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    {
      name: 'Jordan Design',
      role: 'Web Designer',
      image: '🎨',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  ];

  const roleIcons: Record<string, typeof Cpu> = {
    'Hardware Engineer': Cpu,
    'AI Developer': User,
    'Web Designer': Palette,
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-tech" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, white 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-gradient mb-4">
              Meet Our Team
            </h1>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              The brilliant minds behind the Smart Security Robot project
            </p>
          </div>

          <div className="row g-4 mb-5">
            {teamMembers.map((member, idx) => {
              const RoleIcon = roleIcons[member.role];
              return (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className="card-tech p-4 text-center h-100 tech-shadow-hover">
                    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                      <div style={{ width: '120px', height: '120px', margin: '0 auto', background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--accent-purple)/10 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', marginBottom: '1rem' }}>
                        {member.image}
                      </div>
                      <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, var(--primary-medium) 0%, var(--accent-bright) 100%)', padding: '0.6rem', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <RoleIcon style={{ width: '18px', height: '18px', color: 'white' }} />
                      </div>
                    </div>

                    <h4 className="fw-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                      {member.name}
                    </h4>

                    <p className="mb-4 fw-500" style={{ color: 'var(--text-light)' }}>
                      {member.role}
                    </p>

                    <div className="d-flex justify-content-center gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm"
                          style={{
                            background: 'var(--bg-light)',
                            color: 'var(--primary-medium)',
                            border: 'none',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, var(--primary-medium) 0%, var(--accent-bright) 100%)';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bg-light)';
                            e.currentTarget.style.color = 'var(--primary-medium)';
                          }}
                        >
                          <Linkedin style={{ width: '18px', height: '18px' }} />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm"
                          style={{
                            background: 'var(--bg-light)',
                            color: 'var(--primary-medium)',
                            border: 'none',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, var(--primary-medium) 0%, var(--accent-bright) 100%)';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bg-light)';
                            e.currentTarget.style.color = 'var(--primary-medium)';
                          }}
                        >
                          <Github style={{ width: '18px', height: '18px' }} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tech" style={{ background: 'white' }}>
        <div className="container">
          <div className="row g-4 mb-5">
            {[
              { emoji: '⚙️', title: 'Hardware Engineering', desc: 'Designing and building the physical robot with sensors and motors' },
              { emoji: '🤖', title: 'AI Development', desc: 'Creating intelligent algorithms for threat detection and response' },
              { emoji: '🎨', title: 'Web Design', desc: 'Building intuitive interfaces for monitoring and control' },
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card-tech p-4 text-center text-white h-100 tech-shadow-hover" style={{ background: idx === 0 ? 'linear-gradient(135deg, var(--primary-medium) 0%, var(--accent-bright) 100%)' : idx === 1 ? 'linear-gradient(135deg, var(--secondary-purple) 0%, var(--accent-purple) 100%)' : 'linear-gradient(135deg, #5e548e 0%, #9d84b7 100%)' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.emoji}</div>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="mb-0 opacity-90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tech" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, white 100%)' }}>
        <div className="container">
          <div className="card-tech p-5 text-center tech-shadow">
            <h2 className="fw-bold text-gradient mb-4" style={{ fontSize: '2.5rem' }}>
              Our Collaborative Approach
            </h2>
            <p className="lead mb-5" style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-light)' }}>
              Our diverse team brings together expertise in hardware, software, and design to create a comprehensive security solution. Through close collaboration and iterative development, we've built a robot that combines cutting-edge technology with practical usability.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {['Agile Development', 'Daily Standups', 'Code Reviews', 'Design Sprints', 'Testing & QA'].map((method, idx) => (
                <span
                  key={idx}
                  className="badge"
                  style={{
                    padding: '0.6rem 1.2rem',
                    background: 'linear-gradient(135deg, var(--bg-light) 0%, white 100%)',
                    color: 'var(--primary-medium)',
                    fontSize: '0.95rem',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    border: '2px solid var(--border-color)',
                  }}
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
