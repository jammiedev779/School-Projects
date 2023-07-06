import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import {  useRef,useState } from "react";
import { Form, Link, Navigate, useNavigation } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";


export default function SignIn() {
  const {setUser,setToken,setUsers,setCompanies,setPosts,setJobCategories, requestData} = useStateContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [redirect,setRedirect] = useState();
  const [message, setMessage] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    axiosClient.post('/admin/login',payload)
    .then(({data}) => {
      setUser(data.user);
      setToken(data.token);

      setRedirect('/admin/default');
    })
    .catch(e => setMessage('incorrect Email or Password!'));
  }



    
  if(redirect){
    return <Navigate to={redirect}/>
  }
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
    {/* Sign in section */}
    <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
      <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
        Sign In
      </h4>
      <p className="mb-9 ml-1 text-base text-gray-600">
        Enter your email and password to sign in!
      </p>
      {/* Email */}
      <label className={`text-sm text-navy-700 dark:text-white`}>Email</label>
      <input
        ref={emailRef}
        placeholder="example@gmail.com"
        id="email"
        type="text"
        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
      />

      {/* Password */}
      <div className="pt-4">
        <label className={`text-sm text-navy-700 dark:text-white`}>Password</label>
        <input
          ref={passwordRef}
          placeholder="Min. 8 characters"
          id="password"
          type="password"
          className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
        />
      </div>
      {/* Checkbox */}
      <div className="mt-3 mb-4 text-sm text-red-600 flex items-center justify-between px-2">
          {message}
      </div>
      <button onClick={handleSubmit} className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
        Sign In
      </button>
    </div>
  </div>
  );
}
