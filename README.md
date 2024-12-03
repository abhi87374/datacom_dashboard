# Customer Segmentation Dashboard  

This Full Stack web application provides an intuitive platform for visualizing customer segmentation data using various metrics such as monetary value, recency, and frequency. The app integrates MongoDB for data storage and features dynamic APIs for efficient data retrieval and visualization. It also includes responsive design principles, ensuring a seamless experience across different devices.

The application facilitates:  
- **Visual Analysis:** Interactive line and bar graphs displaying customer activities and purchase trends.  
- **Search Functionality:** A search bar to query and filter customer details dynamically.  
- **Cluster Insights:** APIs that compute key metrics (e.g., sum, average, median, count) for customer clusters and provide a gender distribution breakdown.  
- **Customer-Level Information:** Detailed data for individual customers, including frequency, monetary value, recency, gender, and last purchase date.  
- Toggle between **Light Mode** and **Dark Mode** for better visibility using the **Dark Mode Button**.  
## Features  
- **Cluster Insights:** Aggregate statistics for monetary value, recency, and frequency, with customizable aggregation methods (e.g., sum, average, median).  
- **Customer Search:** Retrieve individual customer details using their unique customer code.  
- **Data Visualization:** Graphical representation of key insights using React Chart.js.  
- **Responsive Design:** Optimized for various devices and screen sizes.  

# Setup and Deployment  

## Backend  
1. Clone or download the repository.  
2. Navigate to the backend folder in the terminal.  
3. Run the following commands:  
   ```bash
   python app.py
4. Ensure that the server is running on http://127.0.0.1:5000 (default).


## Frontend
1. Navigate to the frontend folder in the terminal.Run the following commands:
   ```bash
   npm install
   npm run dev 
5. Open http://localhost:3000 with your browser to view the dashboard.



# API Reference  

## 1. Get Customer Data  
Retrieve details for a specific customer by their code.  

- **Endpoint:** `/api/customer`  
- **Method:** `GET`  
- **Query Parameters:**  
  - `code`: Customer Code (required)  

- **Response:**  
  ```<json>
  [
    {
      "gender": "Male",
      "age": 30,
      "last_purchase_date": "2024-11-01",
      "frequency": 12,
      "monetary": 150.75,
      "recency": 10
    }
  ]

## 2. Cluster Insights  
Retrieve aggregated insights for a specific customer cluster.  

- **Endpoint:** `/api/calculate`  
- **Method:** `GET`  
- **Query Parameters:**  
  - `cluster`: Cluster ID (required)  
  - `function`: Aggregation function (`sum`, `avg`, `median`, `count`)  

- **Response:**  
  ```<json>
  {
    "1": {
      "Monetary": 12000,
      "Recency": 15,
      "Frequency": 30,
      "Gender_Distribution": {
        "Male": 0.6,
        "Female": 0.4
      }
    }
  }

## 3. Cluster Metrics  
Get metrics for all clusters with a specific aggregation method.  

- **Endpoint:** `/api/clusters`  
- **Method:** `GET`  
- **Query Parameters:**  
  - `metric`: Metric name (`Monetary`, `Recency`, `Frequency`) (required)  
  - `aggregation`: Aggregation method (`sum`, `avg`, `median`, `count`) (required)  

- **Response:**  
  ```<json>
  {
    "1": {
      "Monetary": 1500,
      "Recency": 12,
      "Frequency": 20,
      "Gender_Distribution": {
        "Male": 0.7,
        "Female": 0.3
      }
    }
  }


## Usage  
- Use the **Search Bar** to query specific customer details using their code.  
- Access **Cluster-Level Metrics** to analyze aggregated insights for each cluster.  
- Visualize **Trends and Distributions** with interactive graphs powered by React and Chart.js.  

---

## Author

- **[@Abhikumar Gupta](https://github.com/Abhi87374)**  

---

## Future Enhancements  
- **Authentication & Role Management:** Add user roles to restrict data access.  
- **Advanced Visualizations:** Include more complex and dynamic visual elements.  
- **Export Data:** Allow data export in formats like CSV or Excel.  
