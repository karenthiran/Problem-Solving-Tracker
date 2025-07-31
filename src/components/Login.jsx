import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import coverImage from '../assets/analyzing.jpg';
import { quotes } from "../assets/quotes";
import { auth } from '../firebase';

export const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isquote, setIsQuote] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setIsQuote(randomQuote);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError(''); // Clear any previous error messages

    try {
      if (isLoginMode) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User Logged in");
        navigate('/dashboard')
      } else {
        const name = e.target.name.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password !== confirmPassword) {
          setError("Passwords don't match!"); // Display error on UI
          return;
        }

        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User Signed up");
        navigate('/dashboard')
      }
    } catch (error) {
      console.error(error.message);
      setError(error.message); // Display Firebase errors on UI
    }
  };

  return (
    <div className='w-full h-screen flex'>
      <div className='relative w-2/3 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[5%] flex flex-col'>
          <h1 style={{ fontFamily: 'Cambria Math, serif' }} className='text-5xl font-roboto font-bold text-white italic my-4'>
            welcome to DSA diary
          </h1>
          <p className='text-2xl font-semibold text-white'>"Track your effort. Analyze your growth. Master problem-solving with DSA Diary."</p>
        </div>
        <img src={coverImage} className='w-full h-full object-cover' alt="Cover" />
        <p className="absolute bottom-0 left-0 right-0 text-lg p-4 text-center text-5xl text-gray-200 font-bold" style={{ fontFamily: 'Pacifico, cursive' }}>
          {isquote}
        </p>
      </div>

      <div className='w-1/3 h-full bg-white p-8 shadow-lg'>
        {/* header title */}
        <div className='flex justify-center mb-4'>
          <h2 className='text-3xl font-semibold text-center'>
            {isLoginMode ? "Login" : "Signup"}
          </h2>
        </div>
        {/* tab control */}
        <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
          <button
            onClick={() => setIsLoginMode(true)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLoginMode ? "text-white" : "text-black"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginMode(false)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLoginMode ? "text-white" : "text-black"
            }`}
          >
            SignUp
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${
              isLoginMode ? "left-0" : "left-1/2"
            }`}
          ></div>
        </div>

        {/* form section */}
        <form className='space-y-4' onSubmit={handleSubmit}>
          {/* Only show name field for signup */}
          {!isLoginMode && (
            <input
              type='text'
              name="name"
              placeholder='Name'
              required
              className='w-full p-3 border-b-2 border-gray-500 outline-none focus:border-cyan-500 placeholder-gray-400'
            />
          )}

          {/* shared input field */}
          <input
            type='email'
            name="email"
            placeholder='Email Address'
            required
            className='w-full p-3 border-b-2 border-gray-500 outline-none focus:border-cyan-500 placeholder-gray-400'
          />

          <input
            type='password'
            name="password"
            placeholder='Password'
            required
            className='w-full p-3 border-b-2 border-gray-500 outline-none focus:border-cyan-500 placeholder-gray-400'
          />

          {/* signup field */}
          {!isLoginMode && (
            <input
              type='password'
              name="confirmPassword"
              placeholder='Confirm Password'
              required
              className='w-full p-3 border-b-2 border-gray-500 outline-none focus:border-cyan-500 placeholder-gray-400'
            />
          )}

          {/* forgot password */}
          {isLoginMode && (
            <div className='text-right'>
              <p className='text-cyan-600 hover:underline'>forgot password</p>
            </div>
          )}

          {/* Error message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* shared button */}
          <button className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white text-lg rounded-full font-medium hover:opacity-90 transition'>
            {isLoginMode ? "Login" : "SignUp"}
          </button>

          {/* switch links */}
          <p className='text-center text-gray-600'>
            {isLoginMode ? "Don't Have an Account?" : "Already have an account?"}
            <a
              href='#'
              onClick={(e) => setIsLoginMode(!isLoginMode)}
              className='text-cyan-600 hover:underline'
            >
              {isLoginMode ? "SignUp now" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
