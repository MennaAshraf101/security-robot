import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Demo from './components/Demo';
import Team from './components/Team';
import Contact from './components/Contact';
import { Alert } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'intrusion',
      priority: 'high',
      message: 'Unauthorized entry detected at north entrance',
      timestamp: '2025-10-18 14:32',
      seen: false,
    },
    {
      id: '2',
      type: 'fire',
      priority: 'high',
      message: 'Smoke detected in storage area',
      timestamp: '2025-10-18 13:15',
      seen: false,
    },
    {
      id: '3',
      type: 'weapon',
      priority: 'high',
      message: 'Weapon identified near main gate',
      timestamp: '2025-10-18 12:45',
      seen: true,
    },
    {
      id: '4',
      type: 'intrusion',
      priority: 'medium',
      message: 'Motion detected in restricted zone',
      timestamp: '2025-10-18 11:20',
      seen: true,
    },
    {
      id: '5',
      type: 'fire',
      priority: 'low',
      message: 'Temperature spike in server room',
      timestamp: '2025-10-18 10:05',
      seen: true,
    },
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleMarkAsSeen = (id: string) => {
    setAlerts(alerts.map(alert =>
      alert.id === id ? { ...alert, seen: true } : alert
    ));
  };

  const handleDeleteAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'dashboard':
        return (
          <Dashboard
            alerts={alerts}
            onMarkAsSeen={handleMarkAsSeen}
            onDeleteAlert={handleDeleteAlert}
          />
        );
      case 'demo':
        return <Demo />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F5F7]">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        alerts={alerts}
        onMarkAsSeen={handleMarkAsSeen}
      />
      {renderPage()}
    </div>
  );
}

export default App;
