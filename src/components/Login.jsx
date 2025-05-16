import { useState } from "react";

export const Login = () => {
  const [isLoginMode, setIsLoginMode]=useState(true);
  return (
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
      {/* header title */}
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-semibold  text-center">{isLoginMode?'Login':'Signup'}</h2>
      </div>
      {/* tap control */}
      <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
        <button onClick={()=>setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode?"text-white":"text-black"}`}>
          Login
        </button>
        <button onClick={()=>setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode?"text-white":"text-black"}`}>
          SignUp
        </button>
        <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode?'left-0':'left-1/2'}`}></div>
      </div>

      {/* {form section} */}
      <form className='space-y-4'>
        {!isLoginMode && (
          <input type="text" placeholder="Name" required className='w-full p-3 border-b-2 border-gray-500 outline-none focus:border-cyan-500 placeholder-gray-400' />
        )}

        {/* shared input field */}
        <input type="email" placeholder="Email Address" required className='w-full p-3 border-b-2 border-gray-500 outline-none focus:border-cyan-500 placeholder-gray-400'/>

        <input type="password" placeholder="Password" requireds className='w-full p-3 border-b-2 border-gray-500 outline-none focus:border-cyan-500 placeholder-gray-400'/>
        
        {/* signup field */}
        {!isLoginMode && (
          <input type="password" placeholder="Confirm Password" required className='w-full p-3 border-b-2 border-gray-500 outline-none focus:border-cyan-500 placeholder-gray-400'/>
        )}
        
        {/* forgotton password */}
        {isLoginMode && (
          <div className='text-right'>
            <p className='text-cyan-600 hover:underline'>forgot password</p>
          </div>
        )}

        {/* shhared button */}
        <button className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white text-lg rounded-full font-medium hover:opacity-90 transition'>
          {isLoginMode?"Login":"SignUp"}
        </button>

        {/* switch links */}
        <p className='text-center text-gray-600'>
          {isLoginMode?"don't Have an Account?":"alreay have an account?"}
          <a href="#" onClick={(e)=>setIsLoginMode(!isLoginMode)} className='text-cyan-600 hover:underline'>{isLoginMode?"SignUp now":"Login"}</a>
        </p>

      </form>
    </div>
  )
}

export default Login;