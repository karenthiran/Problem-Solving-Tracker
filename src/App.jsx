import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Addproblem from "./components/Addproblem";
import Problemtable from "./components/Problemtable";

export const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Problemtable/>} />
        <Route path="/addproblem" element={<Addproblem />} />
      </Routes>
    </Router>

    // <Router>
        //   <Routes>
        //     <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to /login */}
        //     <Route path="/login" element={<Login />} />
        //     <Route path="/dashboard" element={<Dashboard />} />
        // </Routes>
        // </Router>
    
  );
};
