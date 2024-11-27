import React, { useState } from "react";

const PageSubHeaderLeft = () => {
  const [selectedCluster, setSelectedCluster] = useState(""); // Specific cluster
  const [selectedYear, setSelectedYear] = useState("2009"); // Default to 2009
  const [aggregationFunction, setAggregationFunction] = useState("");
  const [calculatedValues, setCalculatedValues] = useState({});
  const [loading, setLoading] = useState(false);

  const clusters = [0, 1, 2]; // Set clusters to 3 options (0, 1, 2)
  const selectedK = 3; // Hardcoded number of clusters (k = 3)

  const genderMapping = {
    0: "Unknown",
    1: "Male",
    2: "Female",
  };

  const handleCalculate = async () => {
    if (!selectedCluster || !aggregationFunction) {
      alert("Please select a cluster, year, and an aggregation function.");
      return;
    }

    setLoading(true);

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/calculate?k=${selectedK}&cluster=${selectedCluster}&year=${selectedYear}&function=${aggregationFunction}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setCalculatedValues(data);
    } catch (error) {
      console.error("Error fetching calculated values:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#6fcdc2] dark:bg-[#00624d] py-8 px-4 rounded-2xl w-full md:w-1/2">
      <h3>Select Cluster Parameters</h3>

      {/* Year Selection */}
      <div className="mt-4">
        <label className="block">Select Year</label>
        <select
          className="w-full mt-2 p-2 rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2009">2009</option>
        </select>
      </div>

      {/* Cluster Number Selection */}
      <div className="mt-4">
        <label className="block">Select Cluster</label>
        <select
          className="w-full mt-2 p-2 rounded"
          value={selectedCluster}
          onChange={(e) => setSelectedCluster(e.target.value)}
        >
          <option value="">-- Select Cluster --</option>
          {clusters.map((cluster, index) => (
            <option key={index} value={cluster}>
              Cluster {cluster}
            </option>
          ))}
        </select>
      </div>

      {/* Aggregation Function Selection */}
      <div className="mt-4">
        <label className="block">Select Aggregation Function</label>
        <select
          className="w-full mt-2 p-2 rounded"
          value={aggregationFunction}
          onChange={(e) => setAggregationFunction(e.target.value)}
        >
          <option value="">-- Select Function --</option>
          <option value="sum">Sum</option>
          <option value="avg">Average</option>
          <option value="median">Median</option>
          <option value="count">Count</option>
        </select>
      </div>

      {/* Button to fetch results */}
      <div className="mt-4">
        <button
          className="bg-white text-black mt-2 px-4 py-2 rounded w-full"
          onClick={handleCalculate}
        >
          {loading ? "Loading..." : "Fetch Results"}
        </button>
      </div>

      {/* Display results */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Results</h3>
        {Object.keys(calculatedValues).length > 0 ? (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(calculatedValues).map(([key, value]) => (
              <div
                key={key}
                className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <h4 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  Cluster {key}
                </h4>
                <div className="space-y-3">
                  {Object.entries(value).map(([subKey, subValue]) => {
                    if (subKey === "Monetary") {
                      return (
                        <div key={subKey} className="flex justify-between">
                          <span className="font-bold text-gray-600 dark:text-gray-400">
                            {subKey}:
                          </span>
                          <span className="font-bold text-gray-800 dark:text-gray-200">
                            {Number.isFinite(subValue)
                              ? subValue.toFixed(2)
                              : subValue}{" "}
                            JPY
                          </span>
                        </div>
                      );
                    }
                    if (subKey === "Recency") {
                      return (
                        <div key={subKey} className="flex justify-between">
                          <span className="font-bold text-gray-600 dark:text-gray-400">
                            {subKey}:
                          </span>
                          <span className="font-bold text-gray-800 dark:text-gray-200">
                            {Number.isFinite(subValue)
                              ? subValue.toFixed(0)
                              : subValue}{" "}
                            days
                          </span>
                        </div>
                      );
                    }
                    if (subKey === "Gender_Distribution" && typeof subValue === "object") {
                      return (
                        <div key={subKey} className="mt-3">
                          <h5 className="font-bold text-gray-600 dark:text-gray-400">
                            {subKey}:
                          </h5>
                          <ul className="pl-5 mt-2 list-disc text-gray-800 dark:text-gray-200 space-y-1">
                            {Object.entries(subValue).map(([genderKey, genderValue]) => (
                              <li key={genderKey} className="font-bold">
                                {`${genderMapping[genderKey] || "Unknown"}: ${
                                  Number.isFinite(genderValue)
                                    ? (genderValue * 100).toFixed(0)
                                    : 0
                                }%`}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return (
                      <div key={subKey} className="flex justify-between">
                        <span className="font-bold text-gray-600 dark:text-gray-400">
                          {subKey}:
                        </span>
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                          {Number.isFinite(subValue) ? subValue : subValue}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-2 text-gray-600 dark:text-gray-400">
            No results yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default PageSubHeaderLeft;
