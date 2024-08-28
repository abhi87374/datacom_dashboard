import React from 'react'
import Activities from './Activities'
import Todo from './Todo'
const BodyLeft = () => {
  
  return (
    <div className='grid py-2 w-1/2'>
      <Activities />
      <Todo />
    </div>
  )
}

export default BodyLeft
