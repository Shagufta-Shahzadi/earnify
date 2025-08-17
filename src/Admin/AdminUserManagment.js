import React, { useState, useEffect } from 'react';
import AdminSidebar from '../Admin/Adminslider';
import './AdminUserManagment.css'; // Import CSS file
import { 
  Users, Search, Filter, MoreHorizontal,
  Ban, CheckCircle, XCircle, Calendar, Coins, 
  Mail, Phone, MapPin, AlertTriangle, Clock,
  UserPlus
} from 'lucide-react';

// Simulated real user database - starts empty
const initialUserDatabase = [];

// Function to simulate a new user registration
const simulateNewUser = () => {
  const pakistaniNames = [
    'Ahmad Khan', 'Fatima Ali', 'Hassan Shah', 'Aisha Malik', 'Usman Ahmed',
    'Zara Khan', 'Ali Raza', 'Maryam Noor', 'Bilal Sheikh', 'Sana Tariq',
    'Omar Farooq', 'Hina Batool', 'Waqas Iqbal', 'Farah Javed', 'Asad Rehman',
    'Nida Yasmin', 'Rizwan Butt', 'Ayesha Patel', 'Hamza Qureshi', 'Saima Riaz'
  ];

  const pakistaniCities = [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad',
    'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala'
  ];

  const taskTypes = ['Survey', 'Video Ad', 'Website Visit', 'App Download', 'Referral'];
  
  const now = new Date();
  
  return {
    id: 1000 + Date.now() + Math.floor(Math.random() * 1000),
    name: pakistaniNames[Math.floor(Math.random() * pakistaniNames.length)],
    email: `user${Math.floor(Math.random() * 9999)}@example.com`,
    phone: `+92 ${Math.floor(Math.random() * 900) + 300} ${Math.floor(Math.random() * 9000000) + 1000000}`,
    city: pakistaniCities[Math.floor(Math.random() * pakistaniCities.length)],
    joinDate: new Date(now.getTime() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)), // Last 7 days
    status: Math.random() > 0.9 ? 'pending' : 'active',
    totalEarned: Math.floor(Math.random() * 500) + 10,
    coinsBalance: Math.floor(Math.random() * 200) + 10,
    tasksCompleted: Math.floor(Math.random() * 50) + 1,
    lastActive: Math.floor(Math.random() * 24) + 1, // Hours ago
    referrals: Math.floor(Math.random() * 10),
    lastTaskType: taskTypes[Math.floor(Math.random() * taskTypes.length)],
    isOnline: Math.random() > 0.7,
    totalWithdrawn: Math.floor(Math.random() * 300)
  };
};

const UserCard = ({ user, onViewDetails, onToggleStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10b981';
      case 'suspended': return '#ef4444';
      case 'pending': return '#f59e0b';
      default: return '#64748b';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'suspended': return 'Suspended';
      case 'pending': return 'Pending';
      default: return 'Unknown';
    }
  };

  return (
    <div className="user-card">
      <div className="user-header">
        <div className="user-info">
          <div className="user-avatar">
            <span>{user.name.charAt(0)}</span>
            {user.isOnline && <div className="online-indicator"></div>}
          </div>
          <div className="user-details">
            <h4>{user.name}</h4>
            <p>ID: {user.id}</p>
            <div className="user-contact">
              <span><Mail size={12} /> {user.email}</span>
              <span><Phone size={12} /> {user.phone}</span>
            </div>
          </div>
        </div>
        <div className="user-actions">
          <div 
            className="status-badge" 
            style={{ 
              backgroundColor: `${getStatusColor(user.status)}15`,
              color: getStatusColor(user.status)
            }}
          >
            {getStatusText(user.status)}
          </div>
          <button className="action-btn" onClick={() => onViewDetails(user)}>
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      <div className="user-stats">
        <div className="stat-item">
          <Coins size={16} />
          <div>
            <span className="stat-value">{user.coinsBalance}</span>
            <span className="stat-label">Coins</span>
          </div>
        </div>
        <div className="stat-item">
          <CheckCircle size={16} />
          <div>
            <span className="stat-value">{user.tasksCompleted}</span>
            <span className="stat-label">Tasks</span>
          </div>
        </div>
        <div className="stat-item">
          <Users size={16} />
          <div>
            <span className="stat-value">{user.referrals}</span>
            <span className="stat-label">Referrals</span>
          </div>
        </div>
      </div>

      <div className="user-footer">
        <div className="user-location">
          <MapPin size={12} />
          <span>{user.city}</span>
        </div>
        <div className="user-activity">
          <Clock size={12} />
          <span>{user.lastActive}h ago</span>
        </div>
      </div>
    </div>
  );
};

const UserDetailsModal = ({ user, onClose, onToggleStatus }) => {
  if (!user) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>User Details</h3>
          <button onClick={onClose}>
            <XCircle size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="user-detail-card">
            <div className="detail-header">
              <div className="user-avatar large">
                <span>{user.name.charAt(0)}</span>
                {user.isOnline && <div className="online-indicator"></div>}
              </div>
              <div className="detail-info">
                <h4>{user.name}</h4>
                <p>User ID: {user.id}</p>
                <p>Joined: {user.joinDate.toLocaleDateString()}</p>
              </div>
            </div>

            <div className="detail-stats-grid">
              <div className="detail-stat">
                <h5>Total Earned</h5>
                <span className="stat-big">Rs. {user.totalEarned.toLocaleString()}</span>
              </div>
              <div className="detail-stat">
                <h5>Coins Balance</h5>
                <span className="stat-big">{user.coinsBalance}</span>
              </div>
              <div className="detail-stat">
                <h5>Tasks Completed</h5>
                <span className="stat-big">{user.tasksCompleted}</span>
              </div>
              <div className="detail-stat">
                <h5>Total Withdrawn</h5>
                <span className="stat-big">Rs. {user.totalWithdrawn.toLocaleString()}</span>
              </div>
            </div>

            <div className="contact-info">
              <h5>Contact Information</h5>
              <div className="contact-grid">
                <div><Mail size={16} /> {user.email}</div>
                <div><Phone size={16} /> {user.phone}</div>
                <div><MapPin size={16} /> {user.city}, Pakistan</div>
                <div><Calendar size={16} /> Last Task: {user.lastTaskType}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button 
            className="btn-secondary"
            onClick={() => window.open(`mailto:${user.email}`, '_blank')}
          >
            <Mail size={16} />
            Send Email
          </button>
          <button 
            className={`btn-${user.status === 'active' ? 'danger' : 'success'}`}
            onClick={() => onToggleStatus(user)}
          >
            {user.status === 'active' ? <Ban size={16} /> : <CheckCircle size={16} />}
            {user.status === 'active' ? 'Suspend User' : 'Activate User'}
          </button>
        </div>
      </div>
    </div>
  );
};

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState(initialUserDatabase);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loginCount, setLoginCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  // Simulate real-time user registration/login
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly add new users (simulate registrations)
      if (Math.random() > 0.7) { // 30% chance every interval
        const newUser = simulateNewUser();
        setUsers(prevUsers => {
          const updated = [...prevUsers, newUser];
          return updated;
        });
        
        // Simulate login activity
        setLoginCount(prev => prev + 1);
      }
      
      // Update last seen times and online status
      setUsers(prevUsers => 
        prevUsers.map(user => ({
          ...user,
          isOnline: Math.random() > 0.6,
          lastActive: user.isOnline ? 0 : user.lastActive + Math.floor(Math.random() * 2)
        }))
      );
      
      setLastUpdated(new Date().toLocaleTimeString());
    }, 8000); // Every 8 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let filtered = users;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.id.toString().includes(searchQuery) ||
        user.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(user => user.status === statusFilter);
    }

    setFilteredUsers(filtered);
  }, [searchQuery, statusFilter, users]);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleToggleStatus = (user) => {
    const newStatus = user.status === 'active' ? 'suspended' : 'active';
    const updatedUsers = users.map(u => 
      u.id === user.id ? { ...u, status: newStatus } : u
    );
    setUsers(updatedUsers);
    setSelectedUser({ ...user, status: newStatus });
  };

  const getStatusCounts = () => {
    return {
      total: users.length,
      active: users.filter(u => u.status === 'active').length,
      suspended: users.filter(u => u.status === 'suspended').length,
      pending: users.filter(u => u.status === 'pending').length,
      online: users.filter(u => u.isOnline).length
    };
  };

  const statusCounts = getStatusCounts();

  const EmptyState = () => (
    <div className="empty-state">
      <div className="empty-icon">
        <UserPlus size={64} />
      </div>
      <h3>No Users Yet</h3>
      <p>Users will appear here automatically as they register and login to your platform.</p>
      <div className="waiting-indicator">
        <div className="pulse-dot"></div>
        <span>Waiting for user registrations...</span>
      </div>
    </div>
  );

  return (
    <div className="admin-app">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <main className="main-content">
        <div className="user-management-content">
          <div className="page-header">
            <div className="header-content">
              <div className="page-title">
                <Users size={28} />
                <div>
                  <h1>User Management</h1>
                  <p>
                    {users.length > 0 
                      ? `Managing ${statusCounts.total.toLocaleString()} registered users` 
                      : 'Real-time user monitoring dashboard'
                    }
                  </p>
                </div>
              </div>
              <div className="live-status">
                <div className="pulse-dot"></div>
                <span>Live - Updated {lastUpdated}</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#3b82f6' }}>
                <Users size={20} />
              </div>
              <div className="stat-info">
                <h3>{statusCounts.total}</h3>
                <p>Total Users</p>
                {loginCount > 0 && <small>+{loginCount} recent logins</small>}
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#10b981' }}>
                <CheckCircle size={20} />
              </div>
              <div className="stat-info">
                <h3>{statusCounts.active}</h3>
                <p>Active Users</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#f59e0b' }}>
                <AlertTriangle size={20} />
              </div>
              <div className="stat-info">
                <h3>{statusCounts.pending}</h3>
                <p>Pending Approval</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#8b5cf6' }}>
                <div className="online-dot"></div>
              </div>
              <div className="stat-info">
                <h3>{statusCounts.online}</h3>
                <p>Online Now</p>
              </div>
            </div>
          </div>

          {users.length > 0 ? (
            <>
              {/* Filters and Search */}
              <div className="filters-section">
                <div className="search-container">
                  <Search size={20} />
                  <input
                    type="text"
                    placeholder="Search users by name, email, ID, or city..."
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
                    <option value="suspended">Suspended</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>

              {/* Users Grid */}
              <div className="users-grid">
                {filteredUsers.map(user => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onViewDetails={handleViewDetails}
                    onToggleStatus={handleToggleStatus}
                  />
                ))}
              </div>

              {filteredUsers.length === 0 && users.length > 0 && (
                <div className="empty-state">
                  <Users size={48} />
                  <h3>No users found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
              )}
            </>
          ) : (
            <EmptyState />
          )}

          {/* Modal */}
          {showModal && (
            <UserDetailsModal
              user={selectedUser}
              onClose={() => setShowModal(false)}
              onToggleStatus={handleToggleStatus}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
