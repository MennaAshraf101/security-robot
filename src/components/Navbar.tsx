import { useState, useEffect } from 'react';
import { Menu, X, Bell, Shield } from 'lucide-react';
import { Alert } from '../types';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  alerts: Alert[];
  onMarkAsSeen: (id: string) => void;
}

export default function Navbar({ currentPage, onNavigate, alerts, onMarkAsSeen }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'demo', label: 'Demo' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const unseenAlerts = alerts.filter(a => !a.seen).slice(0, 5);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top nav-tech ${scrolled ? 'scrolled' : ''}`} style={{ top: 0, zIndex: 1000 }}>
      <div className="container-fluid">
        <button
          className="navbar-brand d-flex align-items-center gap-2"
          onClick={() => onNavigate('home')}
          style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
        >
          <Shield style={{ width: '28px', height: '28px', color: 'var(--primary-medium)' }} />
          <span className="text-gradient fw-bold" style={{ fontSize: '1.2rem' }}>
            Smart Security Robot
          </span>
        </button>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ border: 'none', padding: 0 }}
        >
          {mobileMenuOpen ? (
            <X style={{ width: '24px', height: '24px' }} />
          ) : (
            <Menu style={{ width: '24px', height: '24px' }} />
          )}
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`nav-link ${currentPage === item.id ? 'active fw-bold' : ''}`}
                  style={{
                    color: currentPage === item.id ? 'white' : 'var(--text-light)',
                    background: currentPage === item.id ? 'linear-gradient(135deg, var(--primary-medium) 0%, var(--accent-bright) 100%)' : 'transparent',
                    borderRadius: '8px',
                    padding: '0.5rem 1rem',
                    border: 'none',
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center ms-3 gap-2">
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                className="position-relative"
              >
                <Bell style={{ width: '20px', height: '20px', color: 'var(--text-light)' }} />
                {unseenAlerts.length > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-5px',
                      background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {unseenAlerts.length}
                  </span>
                )}
              </button>

              {notificationsOpen && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '100%',
                    width: '320px',
                    background: 'white',
                    borderRadius: '15px',
                    marginTop: '10px',
                    boxShadow: '0 10px 40px rgba(10, 36, 99, 0.2)',
                    zIndex: 1001,
                  }}
                >
                  <div style={{ background: 'linear-gradient(135deg, var(--primary-medium) 0%, var(--secondary-purple) 100%)', color: 'white', padding: '1rem', borderRadius: '15px 15px 0 0' }}>
                    <h6 className="mb-0 fw-bold">Notifications</h6>
                  </div>

                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {unseenAlerts.length === 0 ? (
                      <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>
                        No new notifications
                      </div>
                    ) : (
                      unseenAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          onClick={() => {
                            onMarkAsSeen(alert.id);
                            setNotificationsOpen(false);
                          }}
                          style={{
                            padding: '1rem',
                            borderBottom: '1px solid var(--border-color)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                          }}
                          className="notification-item"
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <div className="d-flex gap-2 align-items-start">
                            <span style={{ fontSize: '1.5rem' }}>
                              {alert.type === 'fire' ? '🔥' : alert.type === 'weapon' ? '🔫' : '🚨'}
                            </span>
                            <div style={{ flex: 1 }}>
                              <div className="d-flex gap-2 align-items-center mb-2">
                                <span className={`badge-tech ${alert.priority}`}>
                                  {alert.priority.toUpperCase()}
                                </span>
                                <small style={{ color: 'var(--text-light)' }}>{alert.timestamp}</small>
                              </div>
                              <p className="mb-0" style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                                {alert.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div style={{ padding: '0.75rem', background: 'var(--bg-light)', textAlign: 'center', borderRadius: '0 0 15px 15px' }}>
                    <button
                      onClick={() => {
                        onNavigate('dashboard');
                        setNotificationsOpen(false);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary-medium)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                      }}
                    >
                      View All
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
