import ThemeContextProvider from "../context/ThemeContextProvider";
import Navbar from "./dashboardcomponents/NavBar";

export const Problemtable = () => {
  return (
    <ThemeContextProvider>
      <div>
        <Navbar/>
      </div>
      <div className="fexl h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-4">Problemtable</div>
    </ThemeContextProvider>
    
  )
}
export default Problemtable;