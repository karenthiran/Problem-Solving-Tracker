import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContextProvider from "../context/ThemeContextProvider";
import { db } from "../firebase";
import Navbar from "./dashboardcomponents/NavBar";

export const Addproblem = () => {
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);

    const [formData, setFormData] = useState({
        problemID: "",
        problemTitle: "",
        difficulty: "",
        date: "",
        platform: "",
        status: "",
        topics: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const { problemID, problemTitle, difficulty, date, platform, status, topics } = formData;

        if (
            !problemID ||
            !problemTitle ||
            !difficulty ||
            !platform ||
            !status ||
            !date ||
            !topics
        ) {
            alert("Please fill all fields");
            return; // Prevent submitting if fields are empty
        }

        try {
            // Add the form data to Firestore
            await addDoc(collection(db, "problems"), {
                problemID,
                problemTitle,
                difficulty,
                date,
                platform,
                status,
                topics,
            });

            setShowMessage(true);
            setTimeout(() => {
                navigate("/showtable");
            }, 500);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const handleProblemtable = () => {
        navigate("/showtable");
    };

    return (
        <ThemeContextProvider>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <Navbar />
                <form onSubmit={handleSubmit}>
                    <div className="px-4 py-2">
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <label className="mb-2 block text-gray-900 dark:text-gray-100">
                                    Enter problem ID
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-black p-2 hover:bg-slate-200 focus:bg-slate-200"
                                    required
                                    name="problemID"
                                    value={formData.problemID}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="w-1/2">
                                <label className="mb-2 block text-gray-900 dark:text-gray-100">
                                    Problem title
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-black p-2 hover:bg-slate-200 focus:bg-slate-200"
                                    required
                                    name="problemTitle"
                                    value={formData.problemTitle}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <label className="mb-2 block text-gray-900 dark:text-gray-100">
                                    Difficulty
                                </label>
                                <select
                                    className="w-full rounded-lg border border-black p-2 hover:bg-slate-200 focus:bg-slate-200"
                                    required
                                    name="difficulty"
                                    value={formData.difficulty}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Dificulty</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>
                            <div className="w-1/2">
                                <label className="mb-2 block text-gray-900 dark:text-gray-100">
                                    Platform
                                </label>
                                <select
                                    className="w-full rounded-lg border border-black p-2 hover:bg-slate-200 focus:bg-slate-200"
                                    required
                                    name="platform"
                                    value={formData.platform}
                                    onChange={handleChange}
                                >
                                    <option value="">Platforms</option>
                                    <option value="leetcode">LeetCode</option>
                                    <option value="codeforces">CodeForces</option>
                                    <option value="gfg">Geeks for Geeks</option>
                                    <option value="codechef">CodeChef</option>
                                </select>
                            </div>
                            <div className="w-1/2">
                                <label className="mb-2 block text-gray-900 dark:text-gray-100">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full rounded-lg border border-black p-2 hover:bg-slate-200 focus:bg-slate-200"
                                    required
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/3">
                                <label className="mb-2 block text-gray-900 dark:text-gray-100">
                                    Status
                                </label>
                                <select
                                    className="focus:bg-slates-200 w-full rounded-lg border border-black p-2 hover:bg-slate-200"
                                    required
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="">Status</option>
                                    <option value="solved">Solved</option>
                                    <option value="attempted">Attempted</option>
                                    <option value="unsolved">Unsolved</option>
                                    
                                </select>
                            </div>
                            <div className="w-2/3 relative z-10">
                                <label className="mb-2 block text-gray-900 dark:text-gray-100">
                                    Problem Topics
                                </label>
                                <select
                                    className="w-full rounded-lg border border-black p-2 hover:bg-slate-200 focus:bg-slate-200"
                                    name="topics"
                                    required
                                    value={formData.topics}
                                    onChange={handleChange}
                                >
                                    <option value="">Topics</option>
                                    <option value="arrays">Arrays</option>
                                    <option value="string">String</option>
                                    <option value="math">Math</option>
                                    <option value="dynamic-programming">Dynamic Programming</option>
                                    <option value="linked-list">Linked List</option>
                                    <option value="binary-tree">Binary Tree</option>
                                    <option value="graph">Graph</option>
                                    <option value="sorting">Sorting</option>
                                    <option value="searching">Searching</option>
                                    <option value="greedy">Greedy</option>
                                    <option value="recursion">Recursion</option>
                                    <option value="backtracking">Backtracking</option>
                                    <option value="hashing">Hashing</option>
                                    <option value="stack">Stack</option>
                                    <option value="queue">Queue</option>
                                    <option value="heap">Heap</option>
                                    <option value="bit-manipulation">Bit Manipulation</option>
                                    <option value="heap">Heap</option>
                                    <option value="matrix">Matrix</option>
                                    <option value="binary-search">Binary Search</option>
                                    <option value="two-pointer">Two Pointer</option>
                                    <option value="sliding-window">Sliding Window</option>
                                    <option value="trie">Trie</option>
                                    <option value="segment-tree">Segment Tree</option>
                                    <option value="segment-tree">Segment Tree</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <button
                            type="button"
                            className="space-x-4 rounded-lg border border-black bg-white px-5 py-2 text-black"
                            onClick={handleProblemtable}
                        >
                            Problem table
                        </button>
                        <button
                            type="submit"
                            className="rounded-xl border border-black bg-gray-200 px-5 py-2 text-black"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </ThemeContextProvider>
    );
};

export default Addproblem;
