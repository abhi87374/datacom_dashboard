
import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const PageSubHeaderRight = () => {
  const [chartType, setChartType] = useState(""); // To toggle between charts
  const [selectedMetric, setSelectedMetric] = useState("Monetary"); // Dropdown selection for metric
  const [selectedAggregation, setSelectedAggregation] = useState("Average"); // Dropdown selection for aggregation function
  const [graphData, setGraphData] = useState(null); // Bar chart data
  const [pieChartData, setPieChartData] = useState(null); // Pie chart data
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch cluster data from the backend
  const fetchClusterData = async () => {
    setLoading(true);
    try {
      // Send both metric and aggregation type to the backend
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/clusters?k=3&metric=${selectedMetric}&aggregation=${selectedAggregation}`
      );
      const data = await response.json();

      // Prepare initial graph data for the selected metric
      updateChartData(data, selectedMetric);
    } catch (error) {
      console.error("Error fetching cluster data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update chart data based on the selected metric and aggregation function
  const updateChartData = (data, metric) => {
    // Prepare bar chart data
    const labels = Object.keys(data).map((clusterKey) => `Cluster ${clusterKey}`);
    const barDatasets = [
      {
        label: `${metric} (${selectedAggregation})`,
        data: labels.map((clusterKey, index) => data[index]?.[metric] || 0),
        backgroundColor: labels.map((_, index) => `rgba(${index * 80}, 99, 132, 0.6)`),
        borderColor: labels.map((_, index) => `rgba(${index * 80}, 99, 132, 1)`),
        borderWidth: 1,
      },
    ];

    setGraphData({ labels, datasets: barDatasets });

    // Prepare pie chart data
    const pieValues = labels.map((clusterKey, index) => data[index]?.[metric] || 0);
    setPieChartData({
      labels,
      datasets: [
        {
          data: pieValues,
          backgroundColor: labels.map((_, index) => `rgba(${index * 80}, 192, 192, 0.6)`),
          borderColor: labels.map((_, index) => `rgba(${index * 80}, 192, 192, 1)`),
          borderWidth: 1,
        },
      ],
    });
  };

  // Handle metric selection change
  const handleMetricChange = (e) => {
    setSelectedMetric(e.target.value);
  };

  // Handle aggregation function selection change
  const handleAggregationChange = (e) => {
    setSelectedAggregation(e.target.value);
  };

  // Effect to fetch data whenever the metric or aggregation changes
  useEffect(() => {
    if (selectedMetric && selectedAggregation) {
      fetchClusterData(); // Fetch data for the selected metric and aggregation function
    }
  }, [selectedMetric, selectedAggregation]); // Runs when either metric or aggregation changes

  return (
    <div className="bg-[#fff] dark:bg-[#121212] py-8 px-4 rounded-2xl w-full md:w-1/2">
      <h3 className="text-lg font-bold mb-4">Cluster Visualization</h3>

      {/* Dropdown for metric selection */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Select Metric:</label>
        <select
          value={selectedMetric}
          onChange={handleMetricChange}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="">-- Select Metric</option>
          <option value="Monetary">Monetary</option>
          <option value="Frequency">Frequency</option>
          <option value="Recency">Recency</option>
          <option value="Age Distribution">Age Distribution</option>
        </select>
      </div>

      {/* Dropdown for aggregation function selection */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Select Aggregation Function:</label>
        <select
          value={selectedAggregation}
          onChange={handleAggregationChange}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="">-- Select Function --</option>
          <option value="avg">Average</option>
          <option value="sum">Sum</option>
          <option value="count">Count</option>
          <option value="median">Median</option>
        </select>
      </div>

      {/* Buttons to toggle charts */}
      <div className="flex justify-around mb-4">
        <button
          className="bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-[#45A049]"
          onClick={() => setChartType("bar")}
        >
          Visualize Bar Charts
        </button>
        <button
          className="bg-[#FF5733] text-white px-4 py-2 rounded hover:bg-[#E34722]"
          onClick={() => setChartType("pie")}
        >
          Visualize Pie Charts
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Display Bar Chart */}
          {chartType === "bar" && graphData && (
            <div className="mt-4">
              <Bar
                data={graphData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: `Cluster Comparison (${selectedMetric} - ${selectedAggregation}) - Bar Chart`,
                    },
                  },
                }}
              />
            </div>
          )}

          {/* Display Pie Chart */}
          {chartType === "pie" && pieChartData && (
            <div className="mt-4">
              <Pie
                data={pieChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: `Cluster Comparison (${selectedMetric} - ${selectedAggregation}) - Pie Chart`,
                    },
                  },
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PageSubHeaderRight;
