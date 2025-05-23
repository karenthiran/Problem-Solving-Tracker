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
    platform: "",
    status: "",
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

    const { problemID, problemTitle, difficulty, platform, status } = formData;

    if (!problemID || !problemTitle || !difficulty || !platform || !status) {
      alert("Please fill all fields");
      return; // Prevent submitting if fields are empty
    }

    try {
      // Add the form data to Firestore
      await addDoc(collection(db, "problems"), {
        problemID,
        problemTitle,
        difficulty,
        platform,
        status,
      });


      setShowMessage(true);
      setTimeout(() => {
        navigate("/showtable");
      }, 1500);
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
            <div className="mb-4">
              <label className="mb-2 block">Enter problem ID</label>
              <input
                type="text"
                className="w-3/4 border border-black p-2"
                required
                name="problemID"
                value={formData.problemID}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block">Problem title</label>
              <input
                type="text"
                className="w-full border border-black p-2"
                required
                name="problemTitle"
                value={formData.problemTitle}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block">Difficulty</label>
              <input
                type="text"
                className="w-full border border-black p-2"
                required
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block">Platform</label>
              <input
                type="text"
                className="w-full border border-black p-2"
                required
                name="platform"
                value={formData.platform}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block">Status</label>
              <input
                type="text"
                className="w-full border border-black p-2"
                required
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button
              type="button"
              className="space-x-4 rounded-xl border border-black bg-white px-5 py-2 text-black"
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
