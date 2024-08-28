import React from "react";
import Chart from "../chart/LineChart";
import { useState } from "react";
const Activities = () => {
  const [year, setYear] = useState("2021");
  return (
    <div className="bg-yellow-200 dark:bg-yellow-950 rounded-3xl w-full p-4">
      <div className="flex justify-between ">
        <h3 className="font-bold">Activities</h3>
        <select
          name="Year"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="p-1 rounded-full dark:bg-amber-900 dark:text-gray-200 outline-none text-gray-500 w-max px-12"
        >
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
      <div className="flex justify-between mt-4">
        <Chart year={year} />
      </div>
    </div>
  );
};

export default Activities;
