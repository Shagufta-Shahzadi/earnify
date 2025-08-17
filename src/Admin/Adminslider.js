import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AdminSidebar.css'; // CSS file import karo
import { 
  BarChart3,
  Users, 
  CreditCard,
  Bell,
  Settings,
  X,
  Menu,
  FileText,
  Shield
} from 'lucide-react';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Get active tab from current URL
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/AdminDashboard') return 'AdminDashboard';
    if (path === '/AdminUserManagment') return 'users';
    if (path === '/AdminTaskManagement') return 'tasks';
    if (path === '/AdminPaymentManagement') return 'payments';
    // Default fallback
    return 'AdminDashboard';
  };

  const activeTab = getActiveTab();

  // Menu items with their corresponding routes
  const sidebarItems = [
    { 
      id: 'AdminDashboard', 
      label: 'Dashboard', 
      icon: BarChart3,
      badge: null,
      route: '/AdminDashboard'
    },
    { 
      id: 'users', 
      label: 'Users', 
      icon: Users,
      badge: null,
      route: '/AdminUserManagment'
    },
    { 
      id: 'tasks', 
      label: 'Tasks', 
      icon: FileText,
      badge: null,
      route: '/AdminTaskManagement'
    },
    { 
      id: 'payments', 
      label: 'Payments', 
      icon: CreditCard,
      badge: null,
      route: '/AdminPaymentManagement'
    },
    { 
      id: 'notifications', 
      label: 'Notifications', 
      icon: Bell,
      badge: '3',
      route: '/notifications' // You'll need to create this page
    },
    { 
      id: 'security', 
      label: 'Security & Fraud', 
      icon: Shield,
      badge: null,
      route: '/security' // You'll need to create this page
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: Settings,
      badge: null,
      route: '/settings' // You'll need to create this page
    }
  ];

  const handleNavigation = (item) => {
    setSidebarOpen(false);
    navigate(item.route);
    console.log(`Navigating to: ${item.route}`);
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="sidebar-brand-text">
              <h1>Admin Dashboard</h1>
            </div>
          </div>
          <button 
            className="sidebar-close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <div className="sidebar-nav-items">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  <Icon className="nav-item-icon" size={18} />
                  <span className="nav-item-text">{item.label}</span>
                  {item.badge && (
                    <span className="nav-item-badge">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="mobile-menu-icon" size={20} />
      </button>
    </>
  );
};

export default AdminSidebar;