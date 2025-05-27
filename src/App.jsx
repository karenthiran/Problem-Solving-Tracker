import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Addproblem from "./components/Addproblem";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Problemtable from "./components/Problemtable";


export const App = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/showtable" element={<Problemtable/>}/>
            <Route path="/addproblem" element={<Addproblem/>}/>
            <Route path="/gohome" element={<Dashboard/>}/>
      </Routes>
    </Router>
    
  );
};

export default App;




// <Router>
    //   <Routes>
    //     <Route path="/" element={<Problemtable/>} />
    //     <Route path="/addproblem" element={<Addproblem />} />
    //   </Routes>
    // </Router>