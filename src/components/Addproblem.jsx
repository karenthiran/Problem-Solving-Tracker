import ThemeContextProvider from "../context/ThemeContextProvider";
import Navbar from "./dashboardcomponents/NavBar";

export const Addproblem = () => {
  return (
    <ThemeContextProvider>
      <div className="min-h-screen dark:bg-gray-900 bg-gray-100">
        <Navbar />
        <div className="px-4 py-2">
          <div className="mb-4">
            <label className="block mb-2">Enter problem ID</label>
            <input type="text" className="border border-black w-3/4 p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Problem title</label>
            <input type="text" className="border border-black w-full p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Difficulty</label>
            <input type="text" className="border border-black w-full p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Platform</label>
            <input type="text" className="border border-black w-full p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Status</label>
            <input type="text" className="border border-black w-full p-2" />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default Addproblem;
