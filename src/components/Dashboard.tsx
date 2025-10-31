import { useState, useMemo } from 'react';
import { Search, Settings, CheckCheck, Trash2, AlertTriangle, BellOff, BellRing } from 'lucide-react';
import { Alert, NotificationSettings } from '../types';

interface DashboardProps {
  alerts: Alert[];
  onMarkAsSeen: (id: string) => void;
  onDeleteAlert: (id: string) => void;
}

export default function Dashboard({ alerts, onMarkAsSeen, onDeleteAlert }: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'fire' | 'weapon' | 'intrusion'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'severity'>('date');
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    type: 'push',
    priority: 'high',
    muted: false,
  });

  const filteredAlerts = useMemo(() => {
    let filtered = alerts;

    if (filterType !== 'all') {
      filtered = filtered.filter(a => a.type === filterType);
    }

    if (searchQuery) {
      filtered = filtered.filter(a =>
        a.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.timestamp.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered.sort((a, b) => {
      if (sortBy === 'severity') {
        const priority = { high: 3, medium: 2, low: 1 };
        return priority[b.priority] - priority[a.priority];
      }
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
  }, [alerts, filterType, searchQuery, sortBy]);

  const handleSelectAll = () => {
    if (selectedAlerts.length === filteredAlerts.length) {
      setSelectedAlerts([]);
    } else {
      setSelectedAlerts(filteredAlerts.map(a => a.id));
    }
  };

  const handleBulkMarkAsSeen = () => {
    selectedAlerts.forEach(id => onMarkAsSeen(id));
    setSelectedAlerts([]);
  };

  const handleBulkDelete = () => {
    selectedAlerts.forEach(id => onDeleteAlert(id));
    setSelectedAlerts([]);
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, white 100%)', paddingBottom: '60px' }}>
      <div className="container-lg">
        <div className="row align-items-start mb-5 gap-4">
          <div className="col">
            <h1 className="display-4 fw-bold text-gradient mb-3" style={{ fontSize: '2.5rem' }}>
              Security Dashboard
            </h1>
            <p className="lead" style={{ color: 'var(--text-light)' }}>
              Monitor and manage all security events
            </p>
          </div>

          <div className="col-auto">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="btn btn-tech-primary fw-bold"
            >
              <Settings style={{ width: '18px', height: '18px', marginRight: '8px' }} />
              Alert Settings
            </button>
          </div>
        </div>

        {showSettings && (
          <div className="card-tech p-4 mb-4 tech-shadow" style={{ borderLeft: '4px solid var(--primary-medium)' }}>
            <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <Settings style={{ width: '20px', height: '20px', color: 'var(--primary-medium)' }} />
              Customizable Alerts
            </h5>

            <div className="row g-4">
              <div className="col-md-4">
                <label className="form-label fw-bold mb-3">Notification Type</label>
                <div className="d-grid gap-2">
                  {['push', 'sms'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setNotificationSettings({ ...notificationSettings, type: type as 'push' | 'sms' })}
                      className={`btn btn-sm fw-bold ${notificationSettings.type === type ? 'btn-tech-primary' : 'btn-outline-secondary'}`}
                    >
                      {type === 'push' ? 'Web Push (Twilio)' : 'SMS'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-md-4">
                <label className="form-label fw-bold mb-3">Priority Filter</label>
                <div className="d-grid gap-2">
                  {['high', 'medium', 'low'].map((priority) => (
                    <button
                      key={priority}
                      onClick={() => setNotificationSettings({ ...notificationSettings, priority: priority as any })}
                      className={`btn btn-sm fw-bold d-flex align-items-center justify-content-center gap-2 ${
                        notificationSettings.priority === priority
                          ? priority === 'high' ? 'btn-danger' : priority === 'medium' ? 'btn-warning' : 'btn-success'
                          : 'btn-outline-secondary'
                      }`}
                      style={{ color: notificationSettings.priority === priority ? 'white' : undefined }}
                    >
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'currentColor' }} />
                      {priority.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-md-4">
                <label className="form-label fw-bold mb-3">Notification Status</label>
                <button
                  onClick={() => setNotificationSettings({ ...notificationSettings, muted: !notificationSettings.muted })}
                  className={`btn btn-sm w-100 fw-bold d-flex align-items-center justify-content-center gap-2 ${
                    notificationSettings.muted ? 'btn-secondary' : 'btn-tech-primary'
                  }`}
                >
                  {notificationSettings.muted ? (
                    <>
                      <BellOff style={{ width: '16px', height: '16px' }} />
                      Muted
                    </>
                  ) : (
                    <>
                      <BellRing style={{ width: '16px', height: '16px' }} />
                      Active
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="card-tech p-4 tech-shadow">
          <div className="row g-3 mb-4">
            <div className="col-lg-6">
              <div style={{ position: 'relative' }}>
                <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', color: 'var(--text-light)' }} />
                <input
                  type="text"
                  placeholder="Search by date, type, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control input-tech ps-5"
                  style={{ borderWidth: '2px' }}
                />
              </div>
            </div>

            <div className="col-lg-6 d-flex gap-2 flex-wrap">
              {['all', 'fire', 'weapon', 'intrusion'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type as any)}
                  className={`btn btn-sm fw-bold ${filterType === type ? 'btn-tech-primary' : 'btn-outline-secondary'}`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {type === 'all' ? 'All' : type === 'fire' ? '🔥 Fire' : type === 'weapon' ? '🔫 Weapon' : '🚨 Intrusion'}
                </button>
              ))}

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'severity')}
                className="form-select form-select-sm input-tech fw-bold"
                style={{ borderWidth: '2px', maxWidth: '200px' }}
              >
                <option value="date">Sort by Date</option>
                <option value="severity">Sort by Severity</option>
              </select>
            </div>
          </div>

          {selectedAlerts.length > 0 && (
            <div className="alert mb-4 d-flex align-items-center justify-content-between" style={{ background: 'var(--bg-light)', borderLeft: '4px solid var(--primary-medium)' }}>
              <span className="fw-bold">
                {selectedAlerts.length} event{selectedAlerts.length > 1 ? 's' : ''} selected
              </span>
              <div className="d-flex gap-2">
                <button
                  onClick={handleBulkMarkAsSeen}
                  className="btn btn-sm btn-success fw-bold"
                >
                  <CheckCheck style={{ width: '16px', height: '16px', marginRight: '6px' }} />
                  Mark as Seen
                </button>
                <button
                  onClick={handleBulkDelete}
                  className="btn btn-sm btn-danger fw-bold"
                >
                  <Trash2 style={{ width: '16px', height: '16px', marginRight: '6px' }} />
                  Delete
                </button>
              </div>
            </div>
          )}

          <div>
            {filteredAlerts.length === 0 ? (
              <div className="text-center py-5">
                <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>No events found</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="table table-hover mb-0">
                  <thead style={{ background: 'var(--bg-light)' }}>
                    <tr>
                      <th style={{ width: '50px' }}>
                        <input
                          type="checkbox"
                          checked={selectedAlerts.length === filteredAlerts.length}
                          onChange={handleSelectAll}
                          className="form-check-input"
                        />
                      </th>
                      <th>Type</th>
                      <th>Message</th>
                      <th style={{ width: '120px' }}>Priority</th>
                      <th style={{ width: '180px' }}>Timestamp</th>
                      <th style={{ width: '150px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAlerts.map((alert) => (
                      <tr
                        key={alert.id}
                        style={{
                          background: alert.seen ? 'white' : 'rgba(36, 123, 160, 0.03)',
                          borderLeft: selectedAlerts.includes(alert.id) ? '3px solid var(--primary-medium)' : '3px solid transparent',
                        }}
                      >
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedAlerts.includes(alert.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedAlerts([...selectedAlerts, alert.id]);
                              } else {
                                setSelectedAlerts(selectedAlerts.filter(id => id !== alert.id));
                              }
                            }}
                            className="form-check-input"
                          />
                        </td>
                        <td>
                          <span style={{ fontSize: '1.5rem' }}>
                            {alert.type === 'fire' ? '🔥' : alert.type === 'weapon' ? '🔫' : '🚨'}
                          </span>
                        </td>
                        <td className="fw-500" style={{ color: 'var(--text-dark)' }}>
                          {alert.message}
                        </td>
                        <td>
                          <span className={`badge-tech ${alert.priority}`}>
                            {alert.priority.toUpperCase()}
                          </span>
                        </td>
                        <td style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                          {alert.timestamp}
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            {!alert.seen && (
                              <button
                                onClick={() => onMarkAsSeen(alert.id)}
                                className="btn btn-sm btn-success"
                                title="Mark as Seen"
                              >
                                <CheckCheck style={{ width: '16px', height: '16px' }} />
                              </button>
                            )}
                            <button
                              onClick={() => onDeleteAlert(alert.id)}
                              className="btn btn-sm btn-danger"
                              title="Delete"
                            >
                              <Trash2 style={{ width: '16px', height: '16px' }} />
                            </button>
                            <button
                              className="btn btn-sm btn-warning"
                              title="Escalate"
                            >
                              <AlertTriangle style={{ width: '16px', height: '16px' }} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
