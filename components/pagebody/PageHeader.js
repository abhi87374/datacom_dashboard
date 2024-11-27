import React, { useState } from "react";
import { FaSearch, FaBell, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

const PageHeader = () => {
  const [customerCode, setCustomerCode] = useState("");
  const [customerData, setCustomerData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const Router = useRouter();

  const fetchCustomerData = async () => {
    if (!customerCode) {
      setError("Please enter a valid Customer Code.");
      return;
    }
    setLoading(true);
    try {
      setError("");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/customer?code=${customerCode}`);
      if (!response.ok) throw new Error("Customer not found or invalid code.");
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("Invalid data format received.");
      }
      setCustomerData(data);
    } catch (err) {
      setError(err.message);
      setCustomerData([]);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setCustomerCode("");
    setCustomerData([]);
    setError("");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {/* Search Bar and Notification Section */}
      <div className="flex justify-between items-center w-full max-w-4xl">
        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-[rgb(111,205,194)] dark:bg-[#00624d] px-6 py-4 border-2 w-2/3 dark:border-white border-[rgb(111,205,194)] rounded-full">
          <input
            type="text"
            placeholder="Enter Customer Code (eg: 6000007393575)"
            value={customerCode}
            onChange={(e) => setCustomerCode(e.target.value)}
            className="bg-[rgb(111,205,194)] dark:bg-[#00624d] dark:text-white text-black border-none outline-none w-full px-3 placeholder-black"
          />
          <button
            onClick={fetchCustomerData}
            className="bg-black text-white px-4 py-2 rounded-full"
          >
            <FaSearch size={20} />
          </button>
        </div>

        {/* Notification and Profile */}
        <div className="flex items-center gap-3">
          <div className="bg-[rgb(111,205,194)] dark:bg-[#00624d] p-3 rounded-full">
            <FaBell color="black" size={25} />
          </div>
          <div className="bg-[rgb(111,205,194)] dark:bg-[#00624d] p-3 rounded-full overflow-hidden">
            <Image
              src="/mainprofile.jpg"
              width={40}
              height={40}
              className="rounded-full h-11"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      {/* Display Loading State */}
      {loading && <div className="text-[rgb(111,205,194)] font-semibold">Loading customer data...</div>}

      {/* Display Error Message */}
      {error && <div className="text-red-500 font-semibold">{error}</div>}

      {/* Display Customer Data */}
      {!loading && customerData.length > 0 && (
        <div className="bg-gray-100 dark:bg-[#00624d] text-black p-4 rounded-lg mt-4 w-full max-w-3xl shadow-lg relative">
          {/* Clear Search Output */}
          <button
            onClick={clearSearch}
            className="absolute top-2 right-2 bg-red-500  text-white rounded-full p-2"
            title="Clear"
          >
            <FaTimes size={16} />
          </button>

          <h3 className="font-bold text-lg mb-4  text-[rgb(111,205,194)]">
            Customer Details
          </h3>

          {/* Display Age and Gender */}
          <div className="bg-[rgb(153,218,210)] dark:bg-black dark:text-white p-4 rounded-lg mb-4 shadow-sm">
            <p><strong>Gender:</strong> {customerData[0]?.gender}</p>
            <p><strong>Age:</strong> {customerData[0]?.age}</p>
          </div>

          {/* Display Transaction Details */}
          <div className="flex flex-col gap-4 h-[320px] overflow-auto w-full">
            {customerData.map((transaction, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 dark:bg-[rgb(153,218,210)] bg-white shadow-sm"
              >
                <p><strong>Last Purchase Date:</strong> {transaction.last_purchase_date}</p>
                <p><strong>Recency:</strong> {transaction.recency}</p>
                <p><strong>Monetary:</strong> {transaction.monetary.toFixed(2)}</p>
                <p><strong>Frequency:</strong> {transaction.frequency}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
