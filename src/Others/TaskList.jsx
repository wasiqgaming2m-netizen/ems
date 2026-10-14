import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
const TaskList = () => {
     const [userData, setUserData] = useContext(AuthContext)

const [TaskTitle, setTaskTitle] = useState('')
const [TaskDate, setTaskDate] = useState('')
const [Assignto, setAssignto] = useState('')
const [TaskCatagory, setTaskCatagory] = useState('')
const [TaskDescription, setTaskDescription] = useState('')
 
const [NewTask, setNewTask] = useState('')

  function submitHandler(e){
    e.preventDefault()
    setNewTask({
       taskTitle: TaskTitle,
      date: TaskDate,
      category: TaskCatagory,
      description: TaskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false

    })

    const data = userData

    data.forEach(function(elem){
      if(Assignto == elem.name){
        elem.tasks.push(NewTask)
        elem.newTask = elem.newTask+1
      }
    })

    console.log(data)




    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignto('')
    setTaskCatagory('')


  }
  return (
    <>
     <div className='p-5 bg-[#1c1c1c] rounded mt-7'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} 
        className='flex flex-wrap w-full items-satrt justify-between '>
          
          <div className='w-1/2'>
                 <div>

                <h3 className=' text-gray-300! mb-0.5!  text-sm! '>Task Title</h3>
                <input
                value={TaskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                
                
                className='w-4/5 bg-transparent py-1 px-2 rounded outline-none border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
            
            </div>


              <div>

                <h3 className=' text-gray-300! mb-0.5!  text-sm! '>Date</h3>
                <input
                value={TaskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                 }}
                className='w-4/5 bg-transparent py-1 px-2 rounded outline-none border border-gray-400 mb-4' type="date"  />

            </div>
           
           <div>

                <h3 className=' text-gray-300! mb-0.5!  text-sm! '>Assign to</h3>
                <input
                value={Assignto}
                onChange={(e)=>{
                  setAssignto(e.target.value)
                 }}
                className='w-4/5 bg-transparent py-1 px-2 rounded outline-none border border-gray-400 mb-4' type="text" placeholder='Employee Name' />
           
           </div>

           <div>

                <h3 className=' text-gray-300! mb-0.5!  text-sm! '>Catagory</h3>
                <input
                value={TaskCatagory}
                onChange={(e)=>{
                  setTaskCatagory(e.target.value)
                 }}
                className='w-4/5 bg-transparent py-1 px-2 rounded outline-none border border-gray-400 mb-4' type="text" placeholder='design , dev , etc ...' />
            
            </div>   
          </div>



            <div className='w-2/5 flex flex-col items-start'>

                <h3 className=' text-gray-300! mb-0.5!  text-sm! '>Description</h3>
                <textarea 
                value={TaskDescription}
                onChange={(e)=>{
                  setTaskDescription(e.target.value)
                }}
                className='w-4/5 h-44 bg-transparent py-1 px-2 rounded outline-none border border-gray-400 mb-4' name="" id=""></textarea>
            <button className='bg-emerald-500 hover:bg-emerald-600 py-3 w-4/5'>Create Task</button>

            </div>
        </form>
      </div> 
    </>
  )
}

export default TaskList
