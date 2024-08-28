import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const BarChart = () => {
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
  
    const fetchData = async () => {
        console.log(process.env.NEXT_PUBLIC_apiBaseUrl);
      const res = await fetch(
        //using environment variable for base url

        `/api/orders`
      );
      const data = await res.json();
      console.log(data);
      setChartData(data);
    };
    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }
  const labels = chartData.map((item) => item.month.substring(0, 3));
  const data = chartData.map((item) => item.profit);
  //   console.log(labels);
  //     console.log(data);
  const myChart = {
    labels: labels,
    datasets: [
      {
        color: "white",
        label: "Profits",
        data: data,
        backgroundColor: ["white"],
        borderWidth: 2,
        barThickness: 8,
        borderColor:"white",
        borderRadius: 10,
        borderDash: [],
      
        tension: 0.1,
        pointBackgroundColor: "white",
        pointBorderColor: "black",
      },
    ],
  };
  //options with removed x axis label and label font color white
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
         
          ticks: {
            color: "white",
          },
        },
        x: {
          
          ticks: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        labels: {
          color: "white",
          fontColor: ["white"],
          fontSize: 20,
        },
      },
    };


  return (
    <div className="w-full ">
      <Bar data={myChart} options={options} />
    </div>
  );
};

export default BarChart;
