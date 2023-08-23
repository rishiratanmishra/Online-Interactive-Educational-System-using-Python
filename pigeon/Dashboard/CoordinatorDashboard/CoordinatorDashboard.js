import React from 'react'
import PostInfo from './CoordinatorComponents/PostInfo'
import CoordCard from './Cards/CoordCard'

const CoordinatorDashboard = () => {
  return (
    <>
      <div className='flex flex-col gap-6'>
      <CoordCard/>
      <PostInfo/>
      </div>
     
      </>)
}

export default CoordinatorDashboard