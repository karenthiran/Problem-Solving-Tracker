import ThemeContextProvider from "../context/ThemeContextProvider";
import Navbar from "./dashboardcomponents/NavBar";
import { Sidebar } from "./dashboardcomponents/Sidebar";
import Solvedstatus from "./dashboardcomponents/Solvedstatus";

export const Dashboard = () => {
    return (
        <ThemeContextProvider>
            <div className="flex">
                <Sidebar />
                <div className="h-full grow bg-gray-100 text-gray-900 lg:h-screen dark:bg-gray-900 dark:text-white duration-500">
                    <Navbar />
                    <Solvedstatus />
                </div>
            </div>
        </ThemeContextProvider>
    );
};

export default Dashboard;
