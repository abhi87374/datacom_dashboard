import React from 'react'

const PageSubHeader = () => {
  return (
    <div className='flex justify-between mt-5 '>
      <div className='bg-yellow-200 dark:bg-yellow-950  py-8 w-1/5 p-4 rounded-2xl'>
        <div><h3>Total Sales</h3></div>
        <div className='grid xl:flex justify-between items-center mt-2'>
            <h1 className='text-xl font-bold'>721K</h1>
            <h5 className='text-xs '>+11.01%</h5>
        </div>
      </div>
      <div className='bg-black text-yellow-200 dark:text-white py-8 w-1/5 p-4 rounded-2xl'>
        <div><h3>Visits</h3></div>
        <div className='grid xl:flex justify-between items-center mt-2'>
            <h1 className='text-xl font-bold'>367K</h1>
            <h5 className='text-xs '>+9.15%</h5>
        </div>
      </div>
      <div className='bg-yellow-200 dark:bg-yellow-950 py-8 w-1/5 p-4 rounded-2xl'>
        <div><h3>New Users</h3></div>
        <div className='grid xl:flex justify-between items-center mt-2'>
            <h1 className='text-xl font-bold'>1,156</h1>
            <h5 className='text-xs '>-0.56%</h5>
        </div>
      </div>
      <div className='bg-black text-yellow-200 dark:text-white py-8 w-1/5 p-4 rounded-2xl'>
        <div><h3>Heading</h3></div>
        <div className='grid xl:flex justify-between items-center mt-2'>
            <h1 className='text-xl font-bold'>239K</h1>
            <h5 className='text-xs '>-1.48%</h5>
        </div>
      </div>
    </div>
  )
}

export default PageSubHeader
