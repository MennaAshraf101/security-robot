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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <Shield className="w-10 h-10 text-[#FF7A59] group-hover:text-[#FF6C9E] transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent">
              Smart Security Robot
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white shadow-lg shadow-[#FF8B5E]/30'
                    : 'text-[#555555] hover:text-[#1A1A1A] hover:bg-[#F3F5F7]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 rounded-lg hover:bg-[#F3F5F7] transition-colors"
              >
                <Bell className="w-6 h-6 text-[#555555]" />
                {unseenAlerts.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {unseenAlerts.length}
                  </span>
                )}
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] p-4">
                    <h3 className="text-white font-semibold text-lg">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {unseenAlerts.length === 0 ? (
                      <div className="p-6 text-center text-[#555555]">
                        No new notifications
                      </div>
                    ) : (
                      unseenAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          className="p-4 border-b border-gray-100 hover:bg-[#F3F5F7] cursor-pointer transition-colors"
                          onClick={() => {
                            onMarkAsSeen(alert.id);
                            setNotificationsOpen(false);
                          }}
                        >
                          <div className="flex items-start space-x-3">
                            <span className={`text-2xl ${
                              alert.type === 'fire' ? '🔥' :
                              alert.type === 'weapon' ? '🔫' : '🚨'
                            }`} />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                  alert.priority === 'high' ? 'bg-red-100 text-red-700' :
                                  alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-green-100 text-green-700'
                                }`}>
                                  {alert.priority.toUpperCase()}
                                </span>
                                <span className="text-xs text-[#555555]">{alert.timestamp}</span>
                              </div>
                              <p className="text-sm text-[#1A1A1A]">{alert.message}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="p-3 bg-[#F3F5F7] text-center">
                    <button
                      onClick={() => {
                        onNavigate('dashboard');
                        setNotificationsOpen(false);
                      }}
                      className="text-sm font-medium text-[#FF7A59] hover:text-[#FF6C9E] transition-colors"
                    >
                      View All
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#F3F5F7] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#555555]" />
              ) : (
                <Menu className="w-6 h-6 text-[#555555]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white'
                    : 'text-[#555555] hover:bg-[#F3F5F7]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
