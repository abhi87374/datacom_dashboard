import React from 'react'
import Orders from './Orders'
import Team from './Team'

const BodyRight = () => {
  return (
    <div className="grid py-2 w-1/2 lg:justify-items-end grid-cols-1 justify-items-start">
      <Orders />
      <Team />
    </div>
  );
}

export default BodyRight
