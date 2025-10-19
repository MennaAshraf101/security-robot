export interface Alert {
  id: string;
  type: 'fire' | 'weapon' | 'intrusion';
  priority: 'high' | 'medium' | 'low';
  message: string;
  timestamp: string;
  seen: boolean;
}

export interface NotificationSettings {
  type: 'push' | 'sms';
  priority: 'high' | 'medium' | 'low';
  muted: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}
