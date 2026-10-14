import React from 'react'
import Header from '../../Others/Header'
import TaskList from '../../Others/TaskList'
import AllTask from '../../Others/AllTask'

const AdminDashborad = ({ changeUser }) => {
  return (
    <div className='p-10'>
      <Header changeUser={changeUser}   />
      <TaskList />
      <AllTask />
      
    </div>
  )
}

export default AdminDashborad
