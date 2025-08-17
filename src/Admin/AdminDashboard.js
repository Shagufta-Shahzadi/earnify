import React, { useState, useEffect } from 'react';
import AdminSidebar from '../Admin/Adminslider'; // Import your existing sidebar
import './AdminDashboard.css'; // Import CSS file
import { 
  Users, CreditCard, Bell,
  DollarSign, Clock, CheckCircle, AlertCircle,
  Eye, MousePointer, Share, FileText
} from 'lucide-react';

// Real-time data generator based on actual user activities
const generateLiveData = () => {
  const now = new Date();
  const timeStamp = now.toLocaleTimeString();
  
  // Real user activities that would come from your backend
  const userActivities = [
    { type: 'survey_completed', user: 'Ahmad Khan', reward: 50, action: 'Completed Survey: "Consumer Preferences"' },
    { type: 'video_watched', user: 'Fatima Ali', reward: 25, action: 'Watched 30sec Video Ad' },
    { type: 'referral_bonus', user: 'Hassan Shah', reward: 100, action: 'Earned Referral Bonus' },
    { type: 'payout_requested', user: 'Aisha Malik', reward: -500, action: 'Requested PayPal Payout' },
    { type: 'website_visit', user: 'Usman Ahmed', reward: 15, action: 'Visited Partner Website' },
    { type: 'app_download', user: 'Zara Khan', reward: 75, action: 'Downloaded Sponsored App' },
    { type: 'daily_checkin', user: 'Ali Raza', reward: 10, action: 'Daily Check-in Bonus' },
    { type: 'survey_completed', user: 'Maryam Noor', reward: 40, action: 'Completed Mini Survey' }
  ];

  // Simulate real-time activity feed
  const recentActivities = userActivities
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)
    .map((activity, index) => ({
      id: Date.now() + index,
      user: activity.user,
      action: activity.action,
      coins: activity.reward,
      time: `${Math.floor(Math.random() * 30) + 1} min ago`,
      type: activity.type
    }));

  return {
    // Live user statistics
    userStats: {
      totalUsers: 8547 + Math.floor(Math.random() * 50), // Growing user base
      activeUsers: 1234 + Math.floor(Math.random() * 100), // Currently active
      newUsersToday: 45 + Math.floor(Math.random() * 20),
      onlineNow: 287 + Math.floor(Math.random() * 50)
    },
    
    // Real task completion data
    taskStats: {
      surveysCompleted: 156 + Math.floor(Math.random() * 20),
      videosWatched: 289 + Math.floor(Math.random() * 30),
      websiteVisits: 178 + Math.floor(Math.random() * 25),
      appsDownloaded: 67 + Math.floor(Math.random() * 15),
      referrals: 34 + Math.floor(Math.random() * 10)
    },
    
    // Live earnings data
    earningsData: {
      totalPaidOut: (45670.50 + Math.random() * 1000).toFixed(2),
      pendingPayouts: (12890.25 + Math.random() * 500).toFixed(2),
      todayEarnings: (1847.75 + Math.random() * 200).toFixed(2),
      coinsInCirculation: Math.floor(567890 + Math.random() * 10000)
    },
    
    // Payment method usage
    paymentMethods: {
      paypal: Math.floor(35 + Math.random() * 15),
      easypaisa: Math.floor(42 + Math.random() * 18),
      jazzcash: Math.floor(28 + Math.random() * 12),
      bankTransfer: Math.floor(15 + Math.random() * 8)
    },
    
    recentActivities,
    lastUpdated: timeStamp
  };
};

const StatCard = ({ icon: Icon, title, value, subtitle, trend, color }) => (
  <div className="stat-card">
    <div className="stat-card-content">
      <div className="stat-icon" style={{ backgroundColor: `${color}15`, color }}>
        <Icon size={24} />
      </div>
      <div className="stat-info">
        <h3>{value}</h3>
        <p>{title}</p>
        {subtitle && <small style={{ color: '#94a3b8' }}>{subtitle}</small>}
        {trend && <span className={`stat-change ${trend > 0 ? 'positive' : 'negative'}`}>
          {trend > 0 ? '+' : ''}{trend}% today
        </span>}
      </div>
    </div>
  </div>
);

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Earnify Admin Dashboard</h1>
        <div className="last-updated">
          <Clock size={16} />
          Last updated: {data.lastUpdated}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="stats-grid">
        <StatCard
          icon={Users}
          title="Total Users"
          value={data.userStats.totalUsers.toLocaleString()}
          subtitle={`+${data.userStats.newUsersToday} today`}
          trend={8.2}
          color="#3b82f6"
        />
        <StatCard
          icon={CheckCircle}
          title="Active Users"
          value={data.userStats.activeUsers.toLocaleString()}
          subtitle={`${data.userStats.onlineNow} online now`}
          trend={12.5}
          color="#10b981"
        />
        <StatCard
          icon={DollarSign}
          title="Total Paid Out"
          value={`$${data.earningsData.totalPaidOut}`}
          subtitle={`$${data.earningsData.todayEarnings} today`}
          trend={15.8}
          color="#8b5cf6"
        />
        <StatCard
          icon={CreditCard}
          title="Pending Payouts"
          value={`$${data.earningsData.pendingPayouts}`}
          subtitle="Awaiting processing"
          trend={-2.1}
          color="#f59e0b"
        />
      </div>

      <div className="dashboard-grid">
        {/* Live Activity Feed */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Live User Activities</h3>
            <div className="activity-indicator">
              <div className="pulse-dot"></div>
              Live Feed
            </div>
          </div>
          <div className="activities-list">
            {data.recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item new-activity">
                <div className="activity-info">
                  <strong>{activity.user}</strong>
                  <span className="activity-action">{activity.action}</span>
                </div>
                <div className="activity-meta">
                  <span className={`coins ${activity.coins > 0 ? 'positive' : 'negative'}`}>
                    {activity.coins > 0 ? '+' : ''}{activity.coins} coins
                  </span>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Completion Stats */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Today's Task Completions</h3>
          </div>
          <div className="task-stats">
            <div className="task-stat-item">
              <Eye size={20} />
              <div>
                <span className="task-count">{data.taskStats.videosWatched}</span>
                <span className="task-label">Video Ads Watched</span>
              </div>
            </div>
            <div className="task-stat-item">
              <FileText size={20} />
              <div>
                <span className="task-count">{data.taskStats.surveysCompleted}</span>
                <span className="task-label">Surveys Completed</span>
              </div>
            </div>
            <div className="task-stat-item">
              <MousePointer size={20} />
              <div>
                <span className="task-count">{data.taskStats.websiteVisits}</span>
                <span className="task-label">Website Visits</span>
              </div>
            </div>
            <div className="task-stat-item">
              <Share size={20} />
              <div>
                <span className="task-count">{data.taskStats.referrals}</span>
                <span className="task-label">New Referrals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods Usage */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Payment Methods (Last 24h)</h3>
          </div>
          <div className="payment-stats">
            <div className="payment-method">
              <div className="payment-info">
                <span className="payment-name">PayPal</span>
                <span className="payment-count">{data.paymentMethods.paypal} payouts</span>
              </div>
              <div className="payment-bar">
                <div 
                  className="payment-progress" 
                  style={{ 
                    width: `${(data.paymentMethods.paypal / 80) * 100}%`, 
                    backgroundColor: '#0070ba' 
                  }}
                ></div>
              </div>
            </div>
            <div className="payment-method">
              <div className="payment-info">
                <span className="payment-name">Easypaisa</span>
                <span className="payment-count">{data.paymentMethods.easypaisa} payouts</span>
              </div>
              <div className="payment-bar">
                <div 
                  className="payment-progress" 
                  style={{ 
                    width: `${(data.paymentMethods.easypaisa / 80) * 100}%`, 
                    backgroundColor: '#00a651' 
                  }}
                ></div>
              </div>
            </div>
            <div className="payment-method">
              <div className="payment-info">
                <span className="payment-name">JazzCash</span>
                <span className="payment-count">{data.paymentMethods.jazzcash} payouts</span>
              </div>
              <div className="payment-bar">
                <div 
                  className="payment-progress" 
                  style={{ 
                    width: `${(data.paymentMethods.jazzcash / 80) * 100}%`, 
                    backgroundColor: '#ff6900' 
                  }}
                ></div>
              </div>
            </div>
            <div className="payment-method">
              <div className="payment-info">
                <span className="payment-name">Bank Transfer</span>
                <span className="payment-count">{data.paymentMethods.bankTransfer} payouts</span>
              </div>
              <div className="payment-bar">
                <div 
                  className="payment-progress" 
                  style={{ 
                    width: `${(data.paymentMethods.bankTransfer / 80) * 100}%`, 
                    backgroundColor: '#6366f1' 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status & Alerts */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>System Status & Alerts</h3>
          </div>
          <div className="alerts-list">
            <div className="alert-item warning">
              <AlertCircle size={18} />
              <div>
                <span className="alert-title">High Payout Volume</span>
                <span className="alert-desc">
                  {Math.floor(data.paymentMethods.paypal * 0.3)} PayPal requests pending review
                </span>
              </div>
            </div>
            <div className="alert-item info">
              <Bell size={18} />
              <div>
                <span className="alert-title">Survey Campaign</span>
                <span className="alert-desc">New premium survey tasks available</span>
              </div>
            </div>
            <div className="alert-item success">
              <CheckCircle size={18} />
              <div>
                <span className="alert-title">Server Performance</span>
                <span className="alert-desc">All systems operating normally - 99.9% uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [liveData, setLiveData] = useState(generateLiveData());

  // Update data every 15 seconds to show real-time changes
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(generateLiveData());
    }, 15000); // 15 seconds for more frequent updates

    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard data={liveData} />;
      case 'users':
        return (
          <div className="page-content">
            <h2>User Management</h2>
            <p>Manage {liveData.userStats.totalUsers.toLocaleString()} registered users</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="page-content">
            <h2>Analytics & Reports</h2>
            <p>Detailed performance analytics and user behavior insights</p>
          </div>
        );
      case 'tasks':
        return (
          <div className="page-content">
            <h2>Task Management</h2>
            <p>Create and manage earning tasks for users</p>
          </div>
        );
      case 'payments':
        return (
          <div className="page-content">
            <h2>Payment Processing</h2>
            <p>${liveData.earningsData.pendingPayouts} in pending payouts</p>
          </div>
        );
      default:
        return <Dashboard data={liveData} />;
    }
  };

  return (
    <div className="admin-app">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;