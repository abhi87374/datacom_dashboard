import React, { use } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Chart = (props) => {
  let year = props.year;
  const [chartData, setChartData] = useState([]);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  let color = currentTheme === "dark" ? "white" : "black";
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `/api/activities?year=${year}`
      );
      const data = await res.json();
      console.log(data);
      setChartData(data);
    };
    fetchData();
  }, [year]);

  if (!chartData) {
    return <div>Loading...</div>;
  }
  const labels = chartData.map((item) => item.month.substring(0, 3));
  const data = chartData.map((item) => item.amount);
//   console.log(labels);
//     console.log(data);
  const myChart = {
    labels: labels,
    datasets: [
      {
        label: "$",
        data: data,
        backgroundColor: ["rgba(0,0,0, 1)"],
        borderWidth: 2,
        borderColor: "black",
        borderDash: [],
        borderShadow: 10,
        tension: 0.1,
        pointBackgroundColor: "white",
        pointBorderColor: "black",
      },
    ],
  };
  const options = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: color,
      },
    },
    x: {
      beginAtZero: true,
     
      ticks: {
        color: color,
      },
    },
  },
  
  plugins: {
    legend: {
        display: false,
    },
    
  },
};

  return (
    <div className="w-full ">
    
        <Line data={myChart} options={options}/>
      
      
    </div>
  );
};

export default Chart;
