import React from 'react'

const AcceptTask = ({data}) => {
  return (
   <div className='shrink-0 h-full w-105 p-5 bg-yellow-500 rounded-xl'>  
        <div className='flex items-center justify-between '>
            <h3 className='bg-red-700 px-3 py-1 text-sm rounded '>{data.category}</h3>
            <h4>{data.taskDate}</h4>
        </div>

        <h2 className='text-2xl mt-5 font-medium'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.description}</p>

        <div className='flex justify-between mt-8'>
          <button className='px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded'>Mark as Completed</button>
          <button className='px-2 py-1 bg-red-500 hover:bg-red-900 text-white rounded'>Mark as Failed</button>
        </div>
        </div>
  )
}

export default AcceptTask
