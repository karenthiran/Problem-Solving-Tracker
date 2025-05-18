import Navbar from "./dashboardcomponents/NavBar";
import { Sidebar } from "./dashboardcomponents/Sidebar";
import Solvedstatus from "./dashboardcomponents/Solvedstatus";

export const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="grow ml-16 md:ml-60 h-full lg:h-screen bg-gray-100 text-gray-900">
        <Navbar/>
        <div>
          <Solvedstatus/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;