'use client'
import React from 'react'
import PageHeader from './PageHeader'
import PageSubHeader from './PageSubHeader'
import BodyLeft from './BodyLeft'
import BodyRight from './BodyRight'
const PageBody = () => {
  return (
        <div className="px-5 grid ">
            <PageHeader />
            <PageSubHeader />
            <div className='lg:flex gap-4 mt-5 grid'>
                <BodyLeft />
                <BodyRight />
            </div>
        </div>

  )
}

export default PageBody
