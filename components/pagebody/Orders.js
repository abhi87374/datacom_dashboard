import React from "react";
import BarChart from "../chart/BarChart";

const Orders = () => {
  return (
    <div className="bg-yellow-200 dark:bg-yellow-950 rounded-3xl w-full p-4 h-fit ">
      <div className="bg-gradient-to-tl from-slate-700 from-1% to-black to-60% p-4 rounded-3xl">
        <BarChart />
      </div>
      <div className="grid mt-2 ">
        <h3 className="font-bold">Orders</h3>
        <h5 className="text-sm text-gray-400">
          {" "}
          <span className="font-bold text-green-500">(+23)</span> in last week
        </h5>
      </div>
    </div>
  );
};

export default Orders;
