import { useNavigate } from "react-router-dom";
import ThemeContextProvider from "../context/ThemeContextProvider";
import Navbar from "./dashboardcomponents/NavBar";


export const Problemtable = () => {
    const navigate=useNavigate();
    const handleAddProblemClick=()=>{
        navigate('/addproblem');
    }

    return (
        <ThemeContextProvider>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <Navbar />
                <div className="flex w-full justify-end">
                    <button className="mr-10 border border-white bg-white px-4 py-2 hover:bg-gray-200" onClick={handleAddProblemClick}>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center hover:bg-green-400">
                                <td className="border border-yellow-200">001</td>
                                <td className="border border-yellow-200">LinkedList</td>
                                <td className="border border-yellow-200">Easy</td>
                                <td className="border border-yellow-200">Leetcode</td>
                                <td className="border border-yellow-200">Solved</td>
                            </tr>
                            <tr className="text-center hover:bg-green-400">
                                <td className="border border-yellow-200">001</td>
                                <td className="border border-yellow-200">LinkedList</td>
                                <td className="border border-yellow-200">Easy</td>
                                <td className="border border-yellow-200">Leetcode</td>
                                <td className="border border-yellow-200">Solved</td>
                            </tr>
                            <tr className="text-center hover:bg-green-400">
                                <td className="border border-yellow-200">001</td>
                                <td className="border border-yellow-200">LinkedList</td>
                                <td className="border border-yellow-200">Easy</td>
                                <td className="border border-yellow-200">Leetcode</td>
                                <td className="border border-yellow-200">Solved</td>
                            </tr>
                            <tr className="text-center hover:bg-green-400">
                                <td className="border border-yellow-200">001</td>
                                <td className="border border-yellow-200">LinkedList</td>
                                <td className="border border-yellow-200">Easy</td>
                                <td className="border border-yellow-200">Leetcode</td>
                                <td className="border border-yellow-200">Solved</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </ThemeContextProvider>
    );
};
export default Problemtable;
