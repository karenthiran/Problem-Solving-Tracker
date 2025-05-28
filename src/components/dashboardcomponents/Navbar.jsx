import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContextProvider";

export const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="flex items-center justify-between duration-500 border-b border-gray-300 bg-gray-100 p-4 text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
            <h1>DashBoard</h1>
            <button
                className="text-dark text-2xl"
                onClick={toggleTheme}
            >
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
        </div>
    );
};

export default Navbar;
