import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
const AllTask = () => {
     
     const [userData, setUserData] = useContext(AuthContext)
  
  return (
   <div id='all-tasks' className='bg-[#1c1c1c]  h-80 p-5 mt-8 rounded'>
    
    <div className='bg-emerald-600 mb-2 py-3 px-5 flex justify-between rounded'>

            <h2 className='w-1/5 font-medium'>Name</h2>
            <h3 className='w-1/5 font-medium'>New Task</h3>
            <h5 className='w-1/5 font-medium'>Active Task</h5>
            <h5 className='w-1/5 font-medium'>Completed</h5>
            <h5 className='w-1/5 font-medium'>Failed</h5>

       </div>

       <div className='overflow-auto h-[80%]'>
    
    {userData.map(function(elem , idx) {
     return(<div className='bg-emerald-900 mb-2 py-3 px-5 flex justify-between rounded' key={idx}>

            <h2 className='w-1/5 !text-black font-medium'>{elem.name}</h2>
            <h3 className='w-1/5 !text-blue-600 font-medium'>{elem.newTask}</h3>
            <h5 className='w-1/5 !text-yellow-400 font-medium'>{elem.active}</h5>
            <h5 className='w-1/5 !text-green-600 font-medium'>{elem.completed}</h5>
            <h5 className='w-1/5 !text-red-600 font-medium'>{elem.failed}</h5>

       </div>)
     })} 
          </div>
    </div>
  )
}

export default AllTask
