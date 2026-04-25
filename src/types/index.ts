
export interface PlanSection {
  id: string;
  title: string;
  content: string;
  isCompleted: boolean;
  lastEdited?: string;
  editedBy?: string;
  progress: number; // 0 to 100
  aiScore?: number; // 0 to 100
  humanScore?: number; // 0 to 100
}

export interface BusinessModelItem {
  id: string;
  category: 'users' | 'partners' | 'value' | 'cost' | 'revenue';
  title: string;
  content: string;
  icon?: string;
}

export interface Comment {
  id: string;
  user: string;
  avatar: string;
  text: string;
  timestamp: string;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  credits: number;
  totalCredits: number;
}

export interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'ai' | 'system';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  link?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  priority: 'high' | 'medium' | 'low';
  relatedPlan: string;
  assignedBy: string;
  dueDate: string;
  timestamp: string;
}
