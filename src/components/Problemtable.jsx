import { useNavigate } from "react-router-dom";
import ThemeContextProvider from "../context/ThemeContextProvider";
import Navbar from "./dashboardcomponents/NavBar";
import { Sidebar } from "./dashboardcomponents/Sidebar";

export const Problemtable = () => {
    const navigate = useNavigate();
    const handleAddProblemClick = () => {
        navigate("/addproblem");
    };

    return (
        <ThemeContextProvider>
            <div className="flex">
                <Sidebar />

                <div className="h-full grow bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white lg:h-screen duration-500">
                    <Navbar />
                    <div className="flex w-full justify-end">
                        <button
                            className="hover: mr-10 border border-white bg-green-500 px-4 py-2 shadow-md hover:bg-blue-200 dark:text-gray-900"
                            onClick={handleAddProblemClick}
                        >
                            Add Problem
                        </button>
                    </div>
                    <div className="flex justify-center p-5 shadow-lg dark:text-gray-100">
                        <table className="w-full max-w-5xl table-auto border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-red-700 text-yellow-400">
                                    <th className="border border-green-500 px-4 py-2 text-center">
                                        ID
                                    </th>
                                    <th className="border border-green-500 px-4 py-2 text-center">
                                        Title
                                    </th>
                                    <th className="border border-green-500 px-4 py-2 text-center">
                                        Difficulty
                                    </th>
                                    <th className="border border-green-500 px-4 py-2 text-center">
                                        Platform
                                    </th>
                                    <th className="border border-green-500 px-4 py-2 text-center">
                                        Status
                                    </th>
                                    <th className="border border-green-500 px-4 py-2 text-center">
                                        Date
                                    </th>
                                    <th className="border border-green-500 px-4 py-2 text-center">
                                        Problem tags
                                    </th>
                                    <th className="border border-green-500 px-4 py-2 text-center">
                                        Modify
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center hover:bg-gray-200 hover:text-gray-900">
                                    <td className="border border-yellow-200">001</td>
                                    <td className="border border-yellow-200">LinkedList</td>
                                    <td className="border border-yellow-200">Easy</td>
                                    <td className="border border-yellow-200">Leetcode</td>
                                    <td className="border border-yellow-200">Solved</td>
                                    <td className="border border-yellow-200">12-01-2024</td>
                                    <td className="border border-yellow-200">List HashTable Set</td>
                                    <td className="border border-yellow-200">
                                        <button className="border border-b hover:bg-orange-600 mr-2">Edit</button>
                                        <button className="border border-b hover:bg-sky-700">Delete</button>
                                    </td>
                                </tr>
                                <tr className="text-center hover:bg-gray-200 hover:text-gray-900">
                                    <td className="border border-yellow-200">001</td>
                                    <td className="border border-yellow-200">LinkedList</td>
                                    <td className="border border-yellow-200">Easy</td>
                                    <td className="border border-yellow-200">Leetcode</td>
                                    <td className="border border-yellow-200">Solved</td>
                                    <td className="border border-yellow-200">12-01-2024</td>
                                    <td className="border border-yellow-200">List HashTable Set</td>
                                    <td className="border border-yellow-200">
                                        <button className="border border-b hover:bg-orange-600 mr-2">Edit</button>
                                        <button className="border border-b hover:bg-sky-700">Delete</button>
                                    </td>
                                </tr>
                                <tr className="text-center hover:bg-gray-200 hover:text-gray-900">
                                    <td className="border border-yellow-200">001</td>
                                    <td className="border border-yellow-200">LinkedList</td>
                                    <td className="border border-yellow-200">Easy</td>
                                    <td className="border border-yellow-200">Leetcode</td>
                                    <td className="border border-yellow-200">Solved</td>
                                    <td className="border border-yellow-200">12-01-2024</td>
                                    <td className="border border-yellow-200">List HashTable Set</td>
                                    <td className="border border-yellow-200">
                                        <button className="border border-b hover:bg-orange-600 mr-2">Edit</button>
                                        <button className="border border-b hover:bg-sky-700">Delete</button>
                                    </td>
                                </tr>
                                <tr className="text-center hover:bg-gray-200 hover:text-gray-900">
                                    <td className="border border-yellow-200">001</td>
                                    <td className="border border-yellow-200">LinkedList</td>
                                    <td className="border border-yellow-200">Easy</td>
                                    <td className="border border-yellow-200">Leetcode</td>
                                    <td className="border border-yellow-200">Solved</td>
                                    <td className="border border-yellow-200">12-01-2024</td>
                                    <td className="border border-yellow-200">List HashTable Set</td>
                                    <td className="border border-yellow-200">
                                        <button className="border border-b hover:bg-orange-600">Edit</button>
                                        <button className="border border-b hover:bg-sky-700 ml-2">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </ThemeContextProvider>
    );
};
export default Problemtable;
