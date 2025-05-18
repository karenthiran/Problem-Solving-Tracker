import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from "react-icons/fa";
import { dataBar, dataLine } from "../../assets/chartData";
import Card from "./Card";
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

export const Solvedstatus = () => {
  return (
    <div className="grow p-8">
        <h2 className="text-2xl mb-4">Stats Over View</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card icon={<FaCheckCircle/>} title="Solved" value="20"/>
            <Card icon={<FaHourglassHalf/>} title="Pending" value="12"/>
            <Card icon={<FaTimesCircle/>} title="Unsolved" value="5"/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Monthly Performance Overview</h3>
                <Line data={dataLine}/>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Question Difficulty Overview</h3>
                <Bar data={dataBar}/>
            </div>
        </div>
    </div>
  )
}

export default Solvedstatus;