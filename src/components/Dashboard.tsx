import { useState, useMemo } from 'react';
import { Search, Filter, Bell, Settings, CheckCheck, Trash2, AlertTriangle, BellOff, BellRing } from 'lucide-react';
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
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#F3F5F7] via-white to-[#F3F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent">
              Security Dashboard
            </h1>
            <p className="text-xl text-[#555555]">Monitor and manage all security events</p>
          </div>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Settings className="w-5 h-5" />
            <span>Alert Settings</span>
          </button>
        </div>

        {showSettings && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-[#FF7A59]/20">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center space-x-2">
              <Settings className="w-6 h-6 text-[#FF7A59]" />
              <span>Customizable Alerts</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#555555] mb-3">Notification Type</label>
                <div className="space-y-2">
                  {['push', 'sms'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setNotificationSettings({ ...notificationSettings, type: type as 'push' | 'sms' })}
                      className={`w-full px-4 py-3 rounded-lg font-medium transition-all ${
                        notificationSettings.type === type
                          ? 'bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white shadow-lg'
                          : 'bg-[#F3F5F7] text-[#555555] hover:bg-gray-200'
                      }`}
                    >
                      {type === 'push' ? 'Web Push (Twilio)' : 'SMS'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#555555] mb-3">Priority Filter</label>
                <div className="space-y-2">
                  {['high', 'medium', 'low'].map((priority) => (
                    <button
                      key={priority}
                      onClick={() => setNotificationSettings({ ...notificationSettings, priority: priority as any })}
                      className={`w-full px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                        notificationSettings.priority === priority
                          ? priority === 'high' ? 'bg-red-500 text-white shadow-lg' :
                            priority === 'medium' ? 'bg-yellow-500 text-white shadow-lg' :
                            'bg-green-500 text-white shadow-lg'
                          : 'bg-[#F3F5F7] text-[#555555] hover:bg-gray-200'
                      }`}
                    >
                      <span className={`w-3 h-3 rounded-full ${
                        priority === 'high' ? 'bg-red-400' :
                        priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                      }`} />
                      <span>{priority.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#555555] mb-3">Notification Status</label>
                <button
                  onClick={() => setNotificationSettings({ ...notificationSettings, muted: !notificationSettings.muted })}
                  className={`w-full px-6 py-4 rounded-lg font-medium transition-all flex items-center justify-center space-x-3 ${
                    notificationSettings.muted
                      ? 'bg-gray-300 text-gray-700'
                      : 'bg-gradient-to-r from-[#9E7BFF] to-[#6F42C1] text-white shadow-lg'
                  }`}
                >
                  {notificationSettings.muted ? (
                    <>
                      <BellOff className="w-5 h-5" />
                      <span>Muted</span>
                    </>
                  ) : (
                    <>
                      <BellRing className="w-5 h-5" />
                      <span>Active</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555555]" />
              <input
                type="text"
                placeholder="Search by date, type, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF7A59] focus:outline-none transition-colors text-[#1A1A1A]"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  filterType === 'all'
                    ? 'bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white shadow-lg'
                    : 'bg-[#F3F5F7] text-[#555555] hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('fire')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  filterType === 'fire'
                    ? 'bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white shadow-lg'
                    : 'bg-[#F3F5F7] text-[#555555] hover:bg-gray-200'
                }`}
              >
                🔥 Fire
              </button>
              <button
                onClick={() => setFilterType('weapon')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  filterType === 'weapon'
                    ? 'bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white shadow-lg'
                    : 'bg-[#F3F5F7] text-[#555555] hover:bg-gray-200'
                }`}
              >
                🔫 Weapon
              </button>
              <button
                onClick={() => setFilterType('intrusion')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  filterType === 'intrusion'
                    ? 'bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white shadow-lg'
                    : 'bg-[#F3F5F7] text-[#555555] hover:bg-gray-200'
                }`}
              >
                🚨 Intrusion
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'severity')}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF7A59] focus:outline-none transition-colors text-[#1A1A1A] font-medium"
            >
              <option value="date">Sort by Date</option>
              <option value="severity">Sort by Severity</option>
            </select>
          </div>

          {selectedAlerts.length > 0 && (
            <div className="bg-[#F3F5F7] rounded-xl p-4 mb-6 flex items-center justify-between">
              <span className="text-[#1A1A1A] font-medium">
                {selectedAlerts.length} event{selectedAlerts.length > 1 ? 's' : ''} selected
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handleBulkMarkAsSeen}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  <CheckCheck className="w-4 h-4" />
                  <span>Mark as Seen</span>
                </button>
                <button
                  onClick={handleBulkDelete}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          )}

          <div className="space-y-3">
            {filteredAlerts.length === 0 ? (
              <div className="text-center py-12">
                <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-[#555555] text-lg">No events found</p>
              </div>
            ) : (
              <>
                <div className="flex items-center space-x-4 p-4 bg-[#F3F5F7] rounded-lg font-semibold text-[#1A1A1A]">
                  <input
                    type="checkbox"
                    checked={selectedAlerts.length === filteredAlerts.length}
                    onChange={handleSelectAll}
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                  <span className="flex-1">Type</span>
                  <span className="w-24">Priority</span>
                  <span className="w-40">Timestamp</span>
                  <span className="w-32">Actions</span>
                </div>

                {filteredAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-all ${
                      alert.seen
                        ? 'bg-white border-gray-100'
                        : 'bg-gradient-to-r from-[#FF7A59]/5 to-[#FFB37A]/5 border-[#FF7A59]/20'
                    } ${selectedAlerts.includes(alert.id) ? 'ring-2 ring-[#FF7A59]' : ''}`}
                  >
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
                      className="w-5 h-5 rounded cursor-pointer"
                    />

                    <div className="flex-1 flex items-center space-x-3">
                      <span className="text-3xl">
                        {alert.type === 'fire' ? '🔥' : alert.type === 'weapon' ? '🔫' : '🚨'}
                      </span>
                      <span className="text-[#1A1A1A] font-medium">{alert.message}</span>
                    </div>

                    <span className={`w-24 px-3 py-1 rounded-full text-xs font-bold text-center ${
                      alert.priority === 'high' ? 'bg-red-100 text-red-700' :
                      alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {alert.priority.toUpperCase()}
                    </span>

                    <span className="w-40 text-sm text-[#555555]">{alert.timestamp}</span>

                    <div className="w-32 flex gap-2">
                      {!alert.seen && (
                        <button
                          onClick={() => onMarkAsSeen(alert.id)}
                          className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                          title="Mark as Seen"
                        >
                          <CheckCheck className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => onDeleteAlert(alert.id)}
                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                        title="Escalate"
                      >
                        <AlertTriangle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
