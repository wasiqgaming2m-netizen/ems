import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashborad from './components/Dashboard/AdminDashborad'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import AuthProvider, { AuthContext } from './context/AuthProvider'

const App = () => {

 const [user, setUser] = useState(null)
 const [loggedInUserData, setloggedInUserData] = useState(null)
 const [userData, setUserData] = useContext(AuthContext)

useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')

  if (loggedInUser) {
    const UserData = JSON.parse(loggedInUser)
    setUser(UserData.role)
    setloggedInUserData(UserData.data)
  }
}, [])

const handleLogin = (email, password) => {
  if (email == 'admin@me.com' && password == 123) {
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
  }
  else if (userData) {
    const employee = userData.find((e)=> email==e.email && password == e.password);
   if(employee)
   {
    setUser('employee')
    setloggedInUserData(employee)
    localStorage.setItem( 'loggedInUser', JSON.stringify({  role: 'employee', data: employee })
)
   }
  }
  else{
    alert('Invalid information')
  }
 }

  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ?  <AdminDashborad data={loggedInUserData} changeUser={setUser}/> : user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : null  }  
     
    </>
  )
}

export default App
