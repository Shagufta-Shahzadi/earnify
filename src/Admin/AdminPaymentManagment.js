import React, { useState, useEffect } from 'react';
import AdminSidebar from '../Admin/Adminslider';
import './AdminPaymentManagment.css';
import { 
  CreditCard, DollarSign, Clock, CheckCircle, XCircle, 
  AlertTriangle, Users, Search, Filter, 
Eye, Check, X, Calendar, Coins,
   RefreshCw, Phone, Mail, MapPin,
  Smartphone, Building, Globe
} from 'lucide-react';

// Payment Methods Available
const paymentMethods = [
  { id: 'easypaisa', name: 'Easypaisa', icon: Smartphone, color: '#00c851', prefix: '+92' },
  { id: 'jazzcash', name: 'JazzCash', icon: Phone, color: '#ff8800', prefix: '+92' },
  { id: 'bank', name: 'Bank Transfer', icon: Building, color: '#2196f3', prefix: 'ACC' },
  { id: 'paypal', name: 'PayPal', icon: Globe, color: '#0070ba', prefix: '@' }
];

// Initial payment requests database
const initialPaymentRequests = [
  {
    id: 'PAY-001',
    userId: 1001,
    userName: 'Ahmad Khan',
    userEmail: 'ahmad.khan@example.com',
    amount: 500,
    coinsRedeemed: 500,
    method: 'easypaisa',
    methodDetails: '+92 300 1234567',
    status: 'pending',
    requestDate: new Date(2024, 7, 15),
    processedDate: null,
    adminNote: '',
    transactionId: '',
    userCity: 'Karachi'
  },
  {
    id: 'PAY-002',
    userId: 1002,
    userName: 'Fatima Ali',
    userEmail: 'fatima.ali@example.com',
    amount: 250,
    coinsRedeemed: 250,
    method: 'jazzcash',
    methodDetails: '+92 321 9876543',
    status: 'approved',
    requestDate: new Date(2024, 7, 14),
    processedDate: new Date(2024, 7, 14),
    adminNote: 'Verified and processed',
    transactionId: 'TXN-JC-001',
    userCity: 'Lahore'
  },
  {
    id: 'PAY-003',
    userId: 1003,
    userName: 'Hassan Shah',
    userEmail: 'hassan.shah@example.com',
    amount: 1000,
    coinsRedeemed: 1000,
    method: 'bank',
    methodDetails: 'ACC-HBL-123456789',
    status: 'pending',
    requestDate: new Date(2024, 7, 15),
    processedDate: null,
    adminNote: '',
    transactionId: '',
    userCity: 'Islamabad'
  },
  {
    id: 'PAY-004',
    userId: 1004,
    userName: 'Aisha Malik',
    userEmail: 'aisha.malik@example.com',
    amount: 750,
    coinsRedeemed: 750,
    method: 'paypal',
    methodDetails: 'aisha.malik@paypal.com',
    status: 'rejected',
    requestDate: new Date(2024, 7, 13),
    processedDate: new Date(2024, 7, 13),
    adminNote: 'Insufficient verification documents',
    transactionId: '',
    userCity: 'Multan'
  },
  {
    id: 'PAY-005',
    userId: 1005,
    userName: 'Usman Ahmed',
    userEmail: 'usman.ahmed@example.com',
    amount: 300,
    coinsRedeemed: 300,
    method: 'easypaisa',
    methodDetails: '+92 345 1122334',
    status: 'processing',
    requestDate: new Date(2024, 7, 14),
    processedDate: new Date(2024, 7, 15),
    adminNote: 'Payment being processed',
    transactionId: 'TXN-EP-002',
    userCity: 'Faisalabad'
  }
];

const PaymentCard = ({ payment, onViewDetails, onApprove, onReject }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f59e0b';
      case 'approved': return '#10b981';
      case 'rejected': return '#ef4444';
      case 'processing': return '#3b82f6';
      default: return '#64748b';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock size={14} />;
      case 'approved': return <CheckCircle size={14} />;
      case 'rejected': return <XCircle size={14} />;
      case 'processing': return <RefreshCw size={14} />;
      default: return <AlertTriangle size={14} />;
    }
  };

  const getMethodIcon = (method) => {
    const methodObj = paymentMethods.find(m => m.id === method);
    if (methodObj) {
      const Icon = methodObj.icon;
      return <Icon size={16} style={{ color: methodObj.color }} />;
    }
    return <CreditCard size={16} />;
  };

  const getMethodName = (method) => {
    const methodObj = paymentMethods.find(m => m.id === method);
    return methodObj ? methodObj.name : method;
  };

  return (
    <div className="payment-card">
      <div className="payment-header">
        <div className="payment-info">
          <div className="user-details">
            <h4>{payment.userName}</h4>
            <p className="payment-id">{payment.id}</p>
            <div className="user-contact">
              <span><Mail size={12} /> {payment.userEmail}</span>
              <span><MapPin size={12} /> {payment.userCity}</span>
            </div>
          </div>
        </div>
        <div className="payment-actions">
          <div 
            className="status-badge" 
            style={{ 
              backgroundColor: `${getStatusColor(payment.status)}15`,
              color: getStatusColor(payment.status)
            }}
          >
            {getStatusIcon(payment.status)}
            <span>{payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}</span>
          </div>
        </div>
      </div>

      <div className="payment-details">
        <div className="amount-section">
          <div className="amount-item">
            <DollarSign size={16} />
            <div>
              <span className="amount-value">Rs. {payment.amount.toLocaleString()}</span>
              <span className="amount-label">Amount</span>
            </div>
          </div>
          <div className="amount-item">
            <Coins size={16} />
            <div>
              <span className="amount-value">{payment.coinsRedeemed}</span>
              <span className="amount-label">Coins</span>
            </div>
          </div>
        </div>

        <div className="method-section">
          <div className="payment-method">
            {getMethodIcon(payment.method)}
            <div>
              <span className="method-name">{getMethodName(payment.method)}</span>
              <span className="method-details">{payment.methodDetails}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-footer">
        <div className="payment-date">
          <Calendar size={12} />
          <span>Requested: {payment.requestDate.toLocaleDateString()}</span>
        </div>
        <div className="payment-controls">
          <button 
            className="control-btn view"
            onClick={() => onViewDetails(payment)}
          >
            <Eye size={14} />
          </button>
          {payment.status === 'pending' && (
            <>
              <button 
                className="control-btn approve"
                onClick={() => onApprove(payment)}
              >
                <Check size={14} />
              </button>
              <button 
                className="control-btn reject"
                onClick={() => onReject(payment)}
              >
                <X size={14} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const PaymentDetailsModal = ({ payment, isOpen, onClose, onApprove, onReject, onProcess }) => {
  const [adminNote, setAdminNote] = useState(payment?.adminNote || '');
  const [transactionId, setTransactionId] = useState(payment?.transactionId || '');

  if (!isOpen || !payment) return null;

  const getMethodIcon = (method) => {
    const methodObj = paymentMethods.find(m => m.id === method);
    if (methodObj) {
      const Icon = methodObj.icon;
      return <Icon size={24} style={{ color: methodObj.color }} />;
    }
    return <CreditCard size={24} />;
  };

  const handleApprove = () => {
    onApprove(payment, adminNote, transactionId);
    onClose();
  };

  const handleReject = () => {
    onReject(payment, adminNote);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Payment Request Details</h3>
          <button onClick={onClose}>
            <XCircle size={20} />
          </button>
        </div>

        <div className="payment-details-content">
          <div className="payment-detail-header">
            <div className="payment-icon large">
              {getMethodIcon(payment.method)}
            </div>
            <div className="payment-info">
              <h2>Rs. {payment.amount.toLocaleString()}</h2>
              <p className="payment-method-name">
                {paymentMethods.find(m => m.id === payment.method)?.name}
              </p>
              <div className="payment-meta">
                <span>Request ID: {payment.id}</span>
                <span>•</span>
                <span>Date: {payment.requestDate.toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="payment-stats-detailed">
            <div className="stat-card">
              <div className="stat-icon">
                <DollarSign size={24} />
              </div>
              <div className="stat-info">
                <h3>Rs. {payment.amount.toLocaleString()}</h3>
                <p>Withdrawal Amount</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Coins size={24} />
              </div>
              <div className="stat-info">
                <h3>{payment.coinsRedeemed}</h3>
                <p>Coins Redeemed</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <div className="stat-info">
                <h3>{payment.userId}</h3>
                <p>User ID</p>
              </div>
            </div>
          </div>

          <div className="payment-info-grid">
            <div className="info-section">
              <h4>User Information</h4>
              <div className="info-item">
                <label>Name:</label>
                <p>{payment.userName}</p>
              </div>
              <div className="info-item">
                <label>Email:</label>
                <p>{payment.userEmail}</p>
              </div>
              <div className="info-item">
                <label>City:</label>
                <p>{payment.userCity}</p>
              </div>
              <div className="info-item">
                <label>User ID:</label>
                <p>{payment.userId}</p>
              </div>
            </div>

            <div className="info-section">
              <h4>Payment Details</h4>
              <div className="info-item">
                <label>Method:</label>
                <p>{paymentMethods.find(m => m.id === payment.method)?.name}</p>
              </div>
              <div className="info-item">
                <label>Account Details:</label>
                <p>{payment.methodDetails}</p>
              </div>
              <div className="info-item">
                <label>Status:</label>
                <p className={`status-${payment.status}`}>
                  {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                </p>
              </div>
              {payment.transactionId && (
                <div className="info-item">
                  <label>Transaction ID:</label>
                  <p>{payment.transactionId}</p>
                </div>
              )}
            </div>
          </div>

          {payment.status === 'pending' && (
            <div className="admin-actions-section">
              <h4>Admin Actions</h4>
              <div className="admin-form">
                <div className="form-group">
                  <label>Transaction ID (for approval):</label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="Enter transaction ID"
                  />
                </div>
                <div className="form-group">
                  <label>Admin Note:</label>
                  <textarea
                    value={adminNote}
                    onChange={(e) => setAdminNote(e.target.value)}
                    placeholder="Add a note about this payment..."
                    rows="3"
                  />
                </div>
              </div>
            </div>
          )}

          {payment.adminNote && (
            <div className="info-section">
              <h4>Admin Notes</h4>
              <div className="admin-note">
                <p>{payment.adminNote}</p>
                {payment.processedDate && (
                  <small>Processed on: {payment.processedDate.toLocaleDateString()}</small>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="modal-actions">
          {payment.status === 'pending' ? (
            <>
              <button className="btn-secondary" onClick={onClose}>
                Close
              </button>
              <button 
                className="btn-danger"
                onClick={handleReject}
              >
                <X size={16} />
                Reject
              </button>
              <button 
                className="btn-success"
                onClick={handleApprove}
                disabled={!transactionId.trim()}
              >
                <Check size={16} />
                Approve & Pay
              </button>
            </>
          ) : (
            <button className="btn-secondary" onClick={onClose}>
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const AdminPaymentManagement = () => {
  const [activeTab, setActiveTab] = useState('payments');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [payments, setPayments] = useState(initialPaymentRequests);
  const [filteredPayments, setFilteredPayments] = useState(initialPaymentRequests);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [methodFilter, setMethodFilter] = useState('all');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Simulate real-time payment requests
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly add new payment requests
      if (Math.random() > 0.8) { // 20% chance every interval
        const newPayment = {
          id: `PAY-${String(Date.now()).slice(-3)}`,
          userId: 1000 + Math.floor(Math.random() * 999),
          userName: ['Zara Khan', 'Ali Raza', 'Maryam Noor', 'Bilal Sheikh'][Math.floor(Math.random() * 4)],
          userEmail: `user${Math.floor(Math.random() * 999)}@example.com`,
          amount: [100, 250, 500, 750, 1000][Math.floor(Math.random() * 5)],
          coinsRedeemed: 0,
          method: ['easypaisa', 'jazzcash', 'bank', 'paypal'][Math.floor(Math.random() * 4)],
          methodDetails: '+92 300 1234567',
          status: 'pending',
          requestDate: new Date(),
          processedDate: null,
          adminNote: '',
          transactionId: '',
          userCity: ['Karachi', 'Lahore', 'Islamabad'][Math.floor(Math.random() * 3)]
        };
        newPayment.coinsRedeemed = newPayment.amount;

        setPayments(prevPayments => [newPayment, ...prevPayments]);
      }
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Filter payments
  useEffect(() => {
    let filtered = payments;

    if (searchQuery) {
      filtered = filtered.filter(payment =>
        payment.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.userCity.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(payment => payment.status === statusFilter);
    }

    if (methodFilter !== 'all') {
      filtered = filtered.filter(payment => payment.method === methodFilter);
    }

    setFilteredPayments(filtered);
  }, [searchQuery, statusFilter, methodFilter, payments]);

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
    setShowDetailsModal(true);
  };

  const handleApprove = (payment, adminNote = '', transactionId = '') => {
    setPayments(prevPayments =>
      prevPayments.map(p =>
        p.id === payment.id
          ? {
              ...p,
              status: 'approved',
              processedDate: new Date(),
              adminNote: adminNote || 'Payment approved and processed',
              transactionId: transactionId || `TXN-${payment.method.toUpperCase()}-${Date.now()}`
            }
          : p
      )
    );
  };

  const handleReject = (payment, adminNote = '') => {
    setPayments(prevPayments =>
      prevPayments.map(p =>
        p.id === payment.id
          ? {
              ...p,
              status: 'rejected',
              processedDate: new Date(),
              adminNote: adminNote || 'Payment request rejected'
            }
          : p
      )
    );
  };

  const getPaymentStats = () => {
    const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0);
    const approvedAmount = payments.filter(p => p.status === 'approved').reduce((sum, payment) => sum + payment.amount, 0);
    const pendingAmount = payments.filter(p => p.status === 'pending').reduce((sum, payment) => sum + payment.amount, 0);
    
    return {
      total: payments.length,
      pending: payments.filter(p => p.status === 'pending').length,
      approved: payments.filter(p => p.status === 'approved').length,
      rejected: payments.filter(p => p.status === 'rejected').length,
      processing: payments.filter(p => p.status === 'processing').length,
      totalAmount,
      approvedAmount,
      pendingAmount
    };
  };

  const stats = getPaymentStats();

  return (
    <div className="admin-app">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <main className="main-content">
        <div className="payment-management-content">
          <div className="page-header">
            <div className="header-content">
              <div className="page-title">
                <CreditCard size={28} />
                <div>
                  <h1>Payment Management</h1>
                  <p>Manage user withdrawal requests and payment processing</p>
                </div>
              </div>
              <div className="live-status">
                <div className="pulse-dot"></div>
                <span>Live Updates</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#3b82f6' }}>
                <CreditCard size={20} />
              </div>
              <div className="stat-info">
                <h3>{stats.total}</h3>
                <p>Total Requests</p>
                <small>Rs. {stats.totalAmount.toLocaleString()}</small>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#f59e0b' }}>
                <Clock size={20} />
              </div>
              <div className="stat-info">
                <h3>{stats.pending}</h3>
                <p>Pending Approval</p>
                <small>Rs. {stats.pendingAmount.toLocaleString()}</small>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#10b981' }}>
                <CheckCircle size={20} />
              </div>
              <div className="stat-info">
                <h3>{stats.approved}</h3>
                <p>Approved</p>
                <small>Rs. {stats.approvedAmount.toLocaleString()}</small>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ color: '#ef4444' }}>
                <XCircle size={20} />
              </div>
              <div className="stat-info">
                <h3>{stats.rejected}</h3>
                <p>Rejected</p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="search-container">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search by user name, email, or payment ID..."
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
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="processing">Processing</option>
              </select>
            </div>
            <div className="filter-container">
              <select 
                value={methodFilter} 
                onChange={(e) => setMethodFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Methods</option>
                {paymentMethods.map(method => (
                  <option key={method.id} value={method.id}>
                    {method.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Payments Grid */}
          <div className="payments-grid">
            {filteredPayments.map(payment => (
              <PaymentCard
                key={payment.id}
                payment={payment}
                onViewDetails={handleViewDetails}
                onApprove={handleApprove}
                onReject={handleReject}
              />
            ))}
          </div>

          {filteredPayments.length === 0 && (
            <div className="empty-state">
              <CreditCard size={48} />
              <h3>No payment requests found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Payment Details Modal */}
          <PaymentDetailsModal
            payment={selectedPayment}
            isOpen={showDetailsModal}
            onClose={() => {
              setShowDetailsModal(false);
              setSelectedPayment(null);
            }}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </div>
      </main>
    </div>
  );
};

export default AdminPaymentManagement;