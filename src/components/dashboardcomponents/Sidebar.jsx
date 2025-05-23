import { FaPaintBrush, FaSignOutAlt, FaTable, FaTachometerAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const navigate=useNavigate();

    const handleShowtable=()=>{
        navigate('/showtable')
    }
  return (
    <div className="bg-gray-100 text-gray-900 h-screen p-4 fixed w-16 md:w-60 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold hidden md:block text-center">DSA diary</h1>
        <ul className="flex flex-col mt-5 text-xl">
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-500 hover:text-white">
                <FaTachometerAlt/>
                <span className="hidden md:inline">DashBoard</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                <FaUser/>
                <span className="hidden md:inline">Profile</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                <FaTable/>
                <span className="hidden md:inline" onClick={handleShowtable}>Problems table</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                <FaPaintBrush/>
                <span className="hidden md:inline">Apperance</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                <FaSignOutAlt/>
                <span className="hidden md:inline">Logout</span>
            </li>
        </ul>
    </div>
  )
}
