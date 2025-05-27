import { useState } from "react";
import { GiClapperboard } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdAddchart, MdMenuOpen } from "react-icons/md";
import { PiTableFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/DSAdiary.svg";


export const Sidebar = () => {
  const navigate=useNavigate();
  const [open, setOpen] = useState(true);

  const handleaddproblem=()=>{
    navigate('/addproblem')
  }
  const handleproblemtable=()=>{
    navigate('/showtable')
  }
  const handlehome=()=>{
    navigate('/gohome')
  }

    return (
        <nav
            className={`h-screen bg-gray-100 shadow-md duration-500 dark:bg-gray-900 ${open ? "w-60" : "w-16"}`}
        >
            <div className="flex h-20 items-center justify-between px-3 py-2">
                <img
                    src={logo}
                    alt="logo"
                    className={`${open ? "w-10" : "w-0"} rounded-md`}
                />
                <MdMenuOpen
                    size={30}
                    className={`duration-500 cursor-pointer ${!open && 'rotate-180'} hover:cursor-pointer dark:text-white hover:bg-blue-300 rounded-md`}
                    onClick={() => setOpen(!open)}
                />
            </div>
            {/* body */}

            <div className="flex flex-col">
              <div className={`flex gap-2 px-3 py-3 hover:bg-blue-300 rounded-lg hover:font-bold cursor-pointer dark:text-gray-100`} onClick={handlehome}>
              <IoHomeOutline size={25}/>
              <p className={`${!open && "w-0 translate-x-24"} overflow-hidden duration-500`}>Home</p>
            </div>
            <div className="flex gap-2 px-3 py-3 hover:bg-blue-300 rounded-lg hover:font-bold cursor-pointer dark:text-gray-100" onClick={handleaddproblem}>
              <MdAddchart size={25}/>
              <p className={`${!open && "w-0 translate-x-24"} overflow-hidden duration-500`}>Add Problems</p>
            </div>
            <div className="flex gap-2 px-3 py-3 hover:bg-blue-300 rounded-lg hover:font-bold cursor-pointer dark:text-gray-100" onClick={handleproblemtable}>
              <PiTableFill size={25}/>
              <p className={`${!open && "w-0 translate-x-24"} overflow-hidden duration-500`}>Problem Table</p>
            </div>
            <div className="flex gap-2 px-3 py-3 hover:bg-blue-300 rounded-lg hover:font-bold cursor-pointer dark:text-gray-100">
              <GiClapperboard size={25}/>
              <p className={`${!open && "w-0 translate-x-24"} overflow-hidden duration-500`}>Apperance</p>
            </div>
            <div className="flex gap-2 px-3 py-2 hover:bg-blue-300 rounded-lg hover:font-bold cursor-pointer dark:text-gray-100">
              <LuLogOut size={25}/>
              <p className={`${!open && "w-0 translate-x-24"} overflow-hidden duration-500`}>Logout</p>
            </div>
            </div>
        </nav>
    );
};
