import React, { useState } from 'react'

const Header = ({data, changeUser}) => {
  // const [user, setUser] = useState(null)

  // if(!data){
  //   setUser("Admin")
  // }else{
  //   setUser(data.name)
  // }

  function logoutUser(){
    localStorage.removeItem('loggedInUser')
    changeUser(null)
  }

  return (
    <>
    <div className='flex items-end justify-between'>
      <h1 className='font-medium text-2xl '>Hello <br /> <span className='font-semibold text-3xl'>user 👏 </span></h1>
      <button onClick={logoutUser} className='bg-red-600 px-3 py-2 rounded-sm font-semibold text-lg'>
        Log Out
      </button>
    </div>
    </>
  )
}

export default Header
