import React, { useState, useEffect } from 'react';
import AdminSidebar from '../Admin/Adminslider';
import './AdminTaskManagment.css';
import { 
  FileText, Plus, Search, Filter,  Edit2, 
  Trash2, Eye, Play, Pause, TrendingUp, Users, Clock,
  Youtube, Instagram, Twitter, Globe, Download, FileCheck,
  Coins, CheckCircle, XCircle, 
  Target, 
} from 'lucide-react';

// Initial task database
const initialTaskDatabase = [
  {
    id: 1001,
    title: "Subscribe to TechGuru Pakistan",
    type: "youtube_subscribe",
    category: "Social Media",
    description: "Subscribe to our partner YouTube channel for tech reviews",
    reward: 15,
    targetCount: 1000,
    currentCount: 347,
    completionRate: 34.7,
    status: "active",
    createdDate: new Date(2024, 7, 10),
    lastUpdated: new Date(),
    platform: "YouTube",
    link: "https://youtube.com/@techgurupk",
    requirements: "Must stay subscribed for 24 hours",
    timeToComplete: "2 minutes",
    difficulty: "easy"
  },
  {
    id: 1002,
    title: "Watch Gaming Review Video",
    type: "watch_video",
    category: "Video Tasks",
    description: "Watch complete gaming laptop review video",
    reward: 8,
    targetCount: 500,
    currentCount: 289,
    completionRate: 57.8,
    status: "active",
    createdDate: new Date(2024, 7, 12),
    lastUpdated: new Date(),
    platform: "YouTube",
    link: "https://youtube.com/watch?v=example",
    requirements: "Watch minimum 80% of video",
    timeToComplete: "5 minutes",
    difficulty: "easy"
  },
  {
    id: 1003,
    title: "E-commerce Survey 2024",
    type: "survey",
    category: "Surveys",
    description: "Share your online shopping preferences",
    reward: 25,
    targetCount: 200,
    currentCount: 156,
    completionRate: 78.0,
    status: "active",
    createdDate: new Date(2024, 7, 8),
    lastUpdated: new Date(),
    platform: "Survey Platform",
    link: "https://survey.example.com/ecommerce",
    requirements: "Complete all questions honestly",
    timeToComplete: "8 minutes",
    difficulty: "medium"
  },
  {
    id: 1004,
    title: "Follow @earnifypk on Instagram",
    type: "instagram_follow",
    category: "Social Media",
    description: "Follow our official Instagram account",
    reward: 10,
    targetCount: 2000,
    currentCount: 1456,
    completionRate: 72.8,
    status: "paused",
    createdDate: new Date(2024, 7, 5),
    lastUpdated: new Date(),
    platform: "Instagram",
    link: "https://instagram.com/earnifypk",
    requirements: "Public follow required",
    timeToComplete: "1 minute",
    difficulty: "easy"
  }
];

const TaskTypeOptions = [
  { id: 'watch_video', label: 'Watch Videos', icon: Play, color: '#ef4444' },
  { id: 'youtube_subscribe', label: 'YouTube Subscribe', icon: Youtube, color: '#ef4444' },
  { id: 'instagram_follow', label: 'Instagram Follow', icon: Instagram, color: '#8b5cf6' },
  { id: 'twitter_follow', label: 'Twitter Follow', icon: Twitter, color: '#3b82f6' },
  { id: 'website_visit', label: 'Visit Websites', icon: Globe, color: '#10b981' },
  { id: 'app_download', label: 'Download Apps', icon: Download, color: '#f59e0b' },
  { id: 'survey', label: 'Complete Surveys', icon: FileCheck, color: '#6366f1' },
];

const TaskCard = ({ task, onEdit, onDelete, onToggleStatus, onViewDetails }) => {
  const getTypeIcon = (type) => {
    const typeOption = TaskTypeOptions.find(opt => opt.id === type);
    if (typeOption) {
      const Icon = typeOption.icon;
      return <Icon size={16} style={{ color: typeOption.color }} />;
    }
    return <FileText size={16} />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10b981';
      case 'paused': return '#f59e0b';
      case 'completed': return '#6366f1';
      case 'expired': return '#ef4444';
      default: return '#64748b';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'paused': return 'Paused';
      case 'completed': return 'Completed';
      case 'expired': return 'Expired';
      default: return 'Draft';
    }
  };

  return (
    <div className="task-card">
      <div className="task-header">
        <div className="task-info">
          <div className="task-icon">
            {getTypeIcon(task.type)}
          </div>
          <div className="task-details">
            <h4>{task.title}</h4>
            <p className="task-category">{task.category}</p>
            <p className="task-description">{task.description}</p>
          </div>
        </div>
        <div className="task-actions">
          <div 
            className="status-badge" 
            style={{ 
              backgroundColor: `${getStatusColor(task.status)}15`,
              color: getStatusColor(task.status)
            }}
          >
            {getStatusText(task.status)}
          </div>
          <div className="action-buttons">
            <button className="action-btn" onClick={() => onViewDetails(task)}>
              <Eye size={14} />
            </button>
            <button className="action-btn" onClick={() => onEdit(task)}>
              <Edit2 size={14} />
            </button>
            <button className="action-btn danger" onClick={() => onDelete(task)}>
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="task-stats">
        <div className="stat-item">
          <Coins size={14} />
          <span className="stat-value">{task.reward}</span>
          <span className="stat-label">Coins</span>
        </div>
        <div className="stat-item">
          <Target size={14} />
          <span className="stat-value">{task.currentCount}/{task.targetCount}</span>
          <span className="stat-label">Progress</span>
        </div>
        <div className="stat-item">
          <TrendingUp size={14} />
          <span className="stat-value">{task.completionRate.toFixed(1)}%</span>
          <span className="stat-label">Rate</span>
        </div>
        <div className="stat-item">
          <Clock size={14} />
          <span className="stat-value">{task.timeToComplete}</span>
          <span className="stat-label">Time</span>
        </div>
      </div>

      <div className="task-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${Math.min(task.completionRate, 100)}%`,
              backgroundColor: getStatusColor(task.status)
            }}
          ></div>
        </div>
        <span className="progress-text">
          {task.currentCount} of {task.targetCount} completed
        </span>
      </div>

      <div className="task-footer">
        <div className="task-platform">
          <span className="platform-tag">{task.platform}</span>
        </div>
        <div className="task-updated">
          <span>Updated: {task.lastUpdated.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

const AddTaskModal = ({ isOpen, onClose, onSave, editTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'watch_video',
    category: 'Video Tasks',
    description: '',
    reward: 10,
    targetCount: 100,
    platform: '',
    link: '',
    requirements: '',
    timeToComplete: '',
    difficulty: 'easy'
  });

  useEffect(() => {
    if (editTask) {
      setFormData({
        title: editTask.title,
        type: editTask.type,
        category: editTask.category,
        description: editTask.description,
        reward: editTask.reward,
        targetCount: editTask.targetCount,
        platform: editTask.platform,
        link: editTask.link,
        requirements: editTask.requirements,
        timeToComplete: editTask.timeToComplete,
        difficulty: editTask.difficulty
      });
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      ...formData,
      id: editTask ? editTask.id : Date.now(),
      currentCount: editTask ? editTask.currentCount : 0,
      completionRate: editTask ? editTask.completionRate : 0,
      status: editTask ? editTask.status : 'active',
      createdDate: editTask ? editTask.createdDate : new Date(),
      lastUpdated: new Date()
    };
    onSave(taskData);
    onClose();
  };

  const getCategoryForType = (type) => {
    if (type.includes('youtube') || type.includes('instagram') || type.includes('twitter')) {
      return 'Social Media';
    } else if (type === 'watch_video') {
      return 'Video Tasks';
    } else if (type === 'survey') {
      return 'Surveys';
    } else if (type === 'website_visit') {
      return 'Website Tasks';
    } else if (type === 'app_download') {
      return 'App Tasks';
    }
    return 'Other';
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{editTask ? 'Edit Task' : 'Add New Task'}</h3>
          <button onClick={onClose}>
            <XCircle size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Task Type</label>
              <select 
                value={formData.type} 
                onChange={(e) => {
                  const selectedType = e.target.value;
                  setFormData({
                    ...formData, 
                    type: selectedType,
                    category: getCategoryForType(selectedType)
                  });
                }}
                required
              >
                {TaskTypeOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Task Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Enter task title"
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe what users need to do"
                rows="3"
                required
              />
            </div>

            <div className="form-group">
              <label>Reward (Coins)</label>
              <input
                type="number"
                value={formData.reward}
                onChange={(e) => setFormData({...formData, reward: parseInt(e.target.value)})}
                min="1"
                max="1000"
                required
              />
            </div>

            <div className="form-group">
              <label>Target Completions</label>
              <input
                type="number"
                value={formData.targetCount}
                onChange={(e) => setFormData({...formData, targetCount: parseInt(e.target.value)})}
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <label>Platform</label>
              <input
                type="text"
                value={formData.platform}
                onChange={(e) => setFormData({...formData, platform: e.target.value})}
                placeholder="e.g., YouTube, Instagram"
                required
              />
            </div>

            <div className="form-group">
              <label>Task Link</label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({...formData, link: e.target.value})}
                placeholder="https://..."
                required
              />
            </div>

            <div className="form-group">
              <label>Time to Complete</label>
              <input
                type="text"
                value={formData.timeToComplete}
                onChange={(e) => setFormData({...formData, timeToComplete: e.target.value})}
                placeholder="e.g., 5 minutes"
                required
              />
            </div>

            <div className="form-group">
              <label>Difficulty</label>
              <select 
                value={formData.difficulty} 
                onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label>Requirements</label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                placeholder="Any specific requirements or instructions"
                rows="2"
              />
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              {editTask ? 'Update Task' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const TaskDetailsModal = ({ task, isOpen, onClose, onEdit, onToggleStatus }) => {
  if (!isOpen || !task) return null;

  const getTypeIcon = (type) => {
    const typeOption = TaskTypeOptions.find(opt => opt.id === type);
    if (typeOption) {
      const Icon = typeOption.icon;
      return <Icon size={20} style={{ color: typeOption.color }} />;
    }
    return <FileText size={20} />;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Task Details</h3>
          <button onClick={onClose}>
            <XCircle size={20} />
          </button>
        </div>

        <div className="task-details-content">
          <div className="task-detail-header">
            <div className="task-icon large">
              {getTypeIcon(task.type)}
            </div>
            <div className="task-info">
              <h2>{task.title}</h2>
              <p className="task-category">{task.category}</p>
              <div className="task-meta">
                <span>Created: {task.createdDate.toLocaleDateString()}</span>
                <span>•</span>
                <span>Last Updated: {task.lastUpdated.toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="task-stats-detailed">
            <div className="stat-card">
              <div className="stat-icon">
                <Target size={24} />
              </div>
              <div className="stat-info">
                <h3>{task.currentCount}</h3>
                <p>Completions</p>
                <small>of {task.targetCount} target</small>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp size={24} />
              </div>
              <div className="stat-info">
                <h3>{task.completionRate.toFixed(1)}%</h3>
                <p>Completion Rate</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Coins size={24} />
              </div>
              <div className="stat-info">
                <h3>{task.reward * task.currentCount}</h3>
                <p>Total Paid</p>
                <small>{task.reward} coins per task</small>
              </div>
            </div>
          </div>

          <div className="task-info-grid">
            <div className="info-section">
              <h4>Task Information</h4>
              <div className="info-item">
                <label>Description:</label>
                <p>{task.description}</p>
              </div>
              <div className="info-item">
                <label>Platform:</label>
                <p>{task.platform}</p>
              </div>
              <div className="info-item">
                <label>Link:</label>
                <a href={task.link} target="_blank" rel="noopener noreferrer">
                  {task.link}
                </a>
              </div>
            </div>

            <div className="info-section">
              <h4>Requirements</h4>
              <div className="info-item">
                <label>Instructions:</label>
                <p>{task.requirements}</p>
              </div>
              <div className="info-item">
                <label>Time Required:</label>
                <p>{task.timeToComplete}</p>
              </div>
              <div className="info-item">
                <label>Difficulty:</label>
                <p className={`difficulty-${task.difficulty}`}>
                  {task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn-secondary" onClick={() => onEdit(task)}>
            <Edit2 size={16} />
            Edit Task
          </button>
          <button 
            className={`btn-${task.status === 'active' ? 'warning' : 'success'}`}
            onClick={() => onToggleStatus(task)}
          >
            {task.status === 'active' ? <Pause size={16} /> : <Play size={16} />}
            {task.status === 'active' ? 'Pause Task' : 'Activate Task'}
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminTaskManagement = () => {
  const [activeTab, setActiveTab] = useState('tasks');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTaskDatabase);
  const [filteredTasks, setFilteredTasks] = useState(initialTaskDatabase);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  // Simulate real-time task completion updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks(prevTasks => 
        prevTasks.map(task => {
          if (task.status === 'active' && task.currentCount < task.targetCount) {
            const increment = Math.floor(Math.random() * 3); // 0-2 new completions
            const newCount = Math.min(task.currentCount + increment, task.targetCount);
            const newRate = (newCount / task.targetCount) * 100;
            
            return {
              ...task,
              currentCount: newCount,
              completionRate: newRate,
              lastUpdated: new Date(),
              status: newCount >= task.targetCount ? 'completed' : task.status
            };
          }
          return task;
        })
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Filter tasks
  useEffect(() => {
    let filtered = tasks;

    if (searchQuery) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.platform.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(task => task.status === statusFilter);
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter(task => task.type === typeFilter);
    }

    setFilteredTasks(filtered);
  }, [searchQuery, statusFilter, typeFilter, tasks]);

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === editingTask.id ? taskData : task
        )
      );
      setEditingTask(null);
    } else {
      setTasks(prevTasks => [...prevTasks, taskData]);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowAddModal(true);
  };

  const handleDeleteTask = (taskToDelete) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskToDelete.id));
    }
  };

  const handleToggleStatus = (task) => {
    const newStatus = task.status === 'active' ? 'paused' : 'active';
    setTasks(prevTasks =>
      prevTasks.map(t =>
        t.id === task.id ? { ...t, status: newStatus, lastUpdated: new Date() } : t
      )
    );
    if (selectedTask && selectedTask.id === task.id) {
      setSelectedTask({ ...task, status: newStatus });
    }
  };

  const handleViewDetails = (task) => {
    setSelectedTask(task);
    setShowDetailsModal(true);
  };

  const getTaskStats = () => {
    return {
      total: tasks.length,
      active: tasks.filter(t => t.status === 'active').length,
      completed: tasks.filter(t => t.status === 'completed').length,
      paused: tasks.filter(t => t.status === 'paused').length,
      totalCompletions: tasks.reduce((sum, task) => sum + task.currentCount, 0),
      totalRewardsPaid: tasks.reduce((sum, task) => sum + (task.currentCount * task.reward), 0)
    };
  };

  const stats = getTaskStats();

  return (
    <div className="admin-app">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <main className="main-content">
        <div className="task-management-content">
          <div className="page-header">
            <div className="header-content">
              <div className="page-title">
                <FileText size={28} />
                <div>
                  <h1>Task Management</h1>
                  <p>Create and manage earning tasks for users</p>
                </div>
              </div>
              <button 
                className="btn-primary"
                onClick={() => {
                  setEditingTask(null);
                  setShowAddModal(true);
                }}
              >
                <Plus size={16} />
                Add New Task
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#3b82f6' }}>
                <FileText size={20} />
              </div>
              <div className="stat-info">
                <h3>{stats.total}</h3>
                <p>Total Tasks</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#10b981' }}>
                <CheckCircle size={20} />
              </div>
              <div className="stat-info">
                <h3>{stats.active}</h3>
                <p>Active Tasks</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#f59e0b' }}>
                <Users size={20} />
              </div>
              <div className="stat-info">
                <h3>{stats.totalCompletions.toLocaleString()}</h3>
                <p>Total Completions</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#8b5cf6' }}>
                <Coins size={20} />
              </div>
              <div className="stat-info">
                <h3>{stats.totalRewardsPaid.toLocaleString()}</h3>
                <p>Coins Paid Out</p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="search-container">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search tasks by title, description, or platform..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-container">
              <Filter size={16} />
              <select 
                value={statusFilter} 
                onChange={(e) => setStatusFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="filter-container">
              <select 
                value={typeFilter} 
                onChange={(e) => setTypeFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Types</option>
                {TaskTypeOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tasks Grid */}
          <div className="tasks-grid">
            {filteredTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onToggleStatus={handleToggleStatus}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {filteredTasks.length === 0 && (
            <div className="empty-state">
              <FileText size={48} />
              <h3>No tasks found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Modals */}
          <AddTaskModal
            isOpen={showAddModal}
            onClose={() => {
              setShowAddModal(false);
              setEditingTask(null);
            }}
            onSave={handleSaveTask}
            editTask={editingTask}
          />

          <TaskDetailsModal
            task={selectedTask}
            isOpen={showDetailsModal}
            onClose={() => {
              setShowDetailsModal(false);
              setSelectedTask(null);
            }}
            onEdit={(task) => {
              setShowDetailsModal(false);
              handleEditTask(task);
            }}
            onToggleStatus={handleToggleStatus}
          />
        </div>
      </main>
    </div>
  );
};

export default AdminTaskManagement;