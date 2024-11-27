import React from 'react'
// import Customers from './Customers'
import Employees from './Employees'

const BodyRight = () => {
  return (
    <div className="grid py-2 w-1/2 lg:justify-items-end grid-cols-1 justify-items-start">
      {/* <Customers /> */}
      <Employees />
    </div>
  );
}

export default BodyRight
