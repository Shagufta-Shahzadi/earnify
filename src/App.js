import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import HowItWorks from './Pages/HowItWorks';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/Term Condition';
import AdminSidebar from './Admin/Adminslider';
import AdminDashboard from './Admin/AdminDashboard';
import UserManagement from './Admin/AdminUserManagment';
import AdminTaskManagement from './Admin/AdminTaskManagment';
import AdminPaymentManagement from './Admin/AdminPaymentManagment';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route - Jo page aap chahte hain */}
        <Route path="/" element={<Homepage />} />
        
        {/* Other pages */}
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermsConditions />} />

         {/* Admin Pages */}
        <Route path="/admin" element={<AdminSidebar />} />
         <Route path="/AdminDashboard" element={<AdminDashboard />} />
         <Route path="/AdminUserManagment" element={<UserManagement />} />
          <Route path="/AdminTaskManagement" element={<AdminTaskManagement />} />
          <Route path="/AdminPaymentManagement" element={<AdminPaymentManagement />} />
      </Routes>
    </Router>
  );
}