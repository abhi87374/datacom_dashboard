import React from 'react'
import { FaUser } from 'react-icons/fa'
const SidebarFooter = () => {
  return (
    <div className='bg-white flex gap-2 justify-center p-7 border-black border-2 dark:bg-gray-950 rounded-3xl'>
      <div className='border-4 rounded-full w-fit p-3 dark:bg-amber-950 bg-amber-100'>
        <FaUser />
      </div>
      <div className='w-max '>
        <h4 className='font-bold'>Personal Account</h4>
        <h5 className='text-gray-400 text-sm'>Switch to Pro plan.</h5>
      </div>
    </div>
  )
}

export default SidebarFooter
