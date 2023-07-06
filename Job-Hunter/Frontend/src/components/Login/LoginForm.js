import {  useRef,useState } from "react";
import { Form, Link, Navigate, useNavigation } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";
import IconLogo from '../../Image/IconLogo.png'
import { Alert } from "@mui/material";
import CircularUnderLoad from "../MUI/CircularUnderLoad";

export default function LoginForm() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigation = useNavigation()
    const {token, setUser, setCompany, setToken } = useStateContext()
    const [message, setMessage] = useState(null)
    const [redirectTo, setRedirectTo] = useState('');
    const [isLogin, setIsLogin] = useState("login");
    const [wait, setWait] = useState(false);

    const handleSubmit = (e) => {
        setIsLogin("logging")
        console.log(navigation.state)
        e.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(navigation.state)
        //console.log(payload)
    
        axiosClient.post('/login', payload)
            .then(({ data }) => {
                if (data && data.token) {   
                    if(data.type === "user"){
                        setUser(data.user)
                    }else{
                        setCompany(data.company)
                    }    
                    setToken(data.token);
                    setRedirectTo('/');         
                }
                //setIsLogin(false)
                setIsLogin("login-false")
        })
        .catch((error) => {
            const response = error.response;
            if(response && response.status === 422){
                setMessage(response.data.errors);
            }
            setIsLogin("login-false")
        })
        console.log(navigation.state)
        
    }

    if(token){
        return <Navigate to={'/'}/>
    }
    if (redirectTo) {
        return <Navigate to={redirectTo} />;
    }

    return <>
        {isLogin === "login-false" &&<div className="fixed top-0 left-0 w-full p-6 flex justify-center items-center">
            <div className="relative w-full mt-4">
                <div className="absolute right-6 top-1 text-2xl flex items-center h-max w-max text-white  font-semibold cursor-pointer" onClick={() => { setIsLogin("") }}>
                    X
                </div>
                <Alert variant="filled" severity="error">Please input valid email and password!</Alert>
            </div>
         </div>
        }
        {isLogin ==="logging" &&<CircularUnderLoad />}
        <div className="relative flex flex-col  border-1 rounded-lg border-blue-300 p-12 gap-y-5 xs:w-96 w-80 text-black md:text-base sm:text-sm text-xs">
            <img src={IconLogo} className="absolute w-20 h-20 top-1 left-2" />
            <div className="flex flex-col w-full justify-center text-center">
                <label className="font-bold md:text-4xl sm:text-3xl xs:text-2xl text-xl text-two">
                    Login
                </label>
                <label className="opacity-30">
                    Enter login details to get access
                </label>
            </div>
            <Form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
                {message &&
                    <div className="alert">
                        <p>{message}</p>
                    </div>
                }
                <div className="flex flex-col ">
                    <label htmlFor="f1">Email Address</label>
                    <input ref={emailRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="email" placeholder="Enter email" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="f2">Password</label>
                    <input ref={passwordRef} className="border-1 px-1  outline-one outline-4 text-black h-8" id="f2" type="password" placeholder="Enter password" />
                </div>
                <div className="flex flex-row justify-between md:text-xs text-min">
                    <div className="flex flex-row-reverse gap-x-1">
                        <label htmlFor="f3">Keep Me Logged In</label>
                        <input className="border-1 bg-two" id='f3' type="checkbox" />
                    </div>
                    <Link to={'/forgot_password'} className="text-one underline">Forgot Password?</Link>
                </div>
                <div className="flex sm:flex-row flex-col justify-between mt-4 items-center gap-y-4">
                    <div className="md:text-xs text-min">Don't have an account?<span><Link to={'/register'} className="font-bold text-one md:text-sm text-xs underline">Register</Link></span></div>
                    <input className="w-1/3 py-1 px-3 p-3 rounded-lg text-white font-bold bg-two" type="submit" value='LOGIN' />
                </div>
            </Form>
        </div>
    </>
}