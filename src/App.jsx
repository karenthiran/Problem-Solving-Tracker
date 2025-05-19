import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Navigate
import Dashboard from './components/Dashboard';
import Login from './components/Login';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to /login */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
};
