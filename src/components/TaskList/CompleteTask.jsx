import React from 'react'

const CompleteTask = ({data}) => {
  return (

       <div className='shrink-0 h-full w-105 p-5 bg-red-500 rounded-xl'>  
        <div className='flex items-center justify-between '>
            <h3 className='bg-red-700 px-3 py-1 text-sm rounded '>{data.category}</h3>
            <h4>{data.taskDate}</h4>
        </div>

        <h2 className='text-2xl mt-5 font-medium'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        
        <div className=" mt-8">
         <button className=" w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Complete
          </button>
        </div>


    
  </div>
  )
}

export default CompleteTask
