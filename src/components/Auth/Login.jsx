import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
       
        handleLogin(email , password)
        
        setemail('')
          setpassword('')
        
    }

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
        onSubmit={(e) => {
            submitHandler(e)
          
        }}
        className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
             required  
             type="email"  
             className='bg-transparent outline-none rounded-full text-xl border-2 border-emerald-600 py-3 px-5 placeholder:text-gray-400' 
             placeholder='Enter Your Email' 
             />
            <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
              type="password"
              className='bg-transparent outline-none rounded-full text-xl border-2 mt-3 border-emerald-600 py-3 px-5 placeholder:text-gray-400'
               placeholder='Enter Your Password'  
                />
            <button className='mt-5 outline-none rounded-full text-xl border-none bg-emerald-600 py-3 px-27 placeholder:text-white' type="email" placeholder='Enter Your Email'>Log in</button>
        </form>
      </div>
  </div>
  )
}

export default Login
