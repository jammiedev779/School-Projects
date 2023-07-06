import { useRef, useState } from "react";
import { Form, Link, Navigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";
import CircularUnderLoad from "../MUI/CircularUnderLoad";
import IconLogo from '../../Image/IconLogo.png'

export default function RegisterForm({swapper }) {

    const nameRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const genderRef = useRef();
    const [isRegister, setIsRegister] = useState(false);
    const {setUser,setToken} = useStateContext();
    const [errors, setErrors] = useState(null)
    const [redirectTo, setRedirectTo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsRegister(true)
        const payload = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
            gender: genderRef.current.value
        }
        axiosClient.post('/register',payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
            setRedirectTo(`/verify/${data.token}`);
        })
        .catch((error) => {
            const response = error.response;
            setIsRegister(false)
            if(response && response.status === 422){
                setErrors(response.data.errors);
                console.log(response.data.errors);
            } else {
                setErrors(error.message);
                console.log(response.data.errors);
            }
        })
        
    }


    if (redirectTo) {
        return <Navigate to={redirectTo} />;
    }

    return <>
        {
            isRegister && <CircularUnderLoad/>
        }
        {/* {errors &&
                    <div className="alert">
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>
        } */}
        <div className="flex flex-col border-2 rounded-lg p-6 gap-y-3 w-full text-black md:text-base sm:text-sm text-xs">
            <div onClick={swapper} className="absolute top-1 right-2 flex items-center cursor-pointer text-xs">Company<span className="text-2xl font-bold w-5  ml-1 mr-2">&rarr;</span></div>
            <img src={IconLogo} className="absolute w-20 h-20 top-1 left-2" />
            <div className="flex flex-col w-full justify-center text-center">
                <label className="font-bold md:text-4xl sm:text-3xl xs:text-2xl text-xl text-two">
                    Register
                </label>
                <label className="opacity-30 md:text-base sm:text-sm text-xs">
                    Create your account to get full access
                </label>
            </div>
            <Form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
                
                <div className="w-full gap-x-9 gap-y-3 grid md:grid-cols-2">
                    <div className="flex flex-col ">
                        <label htmlFor="f1">Full Name</label>
                        <input ref={nameRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="text" placeholder="Full Name" required />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="f1">Username</label>
                        <input ref={usernameRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="text" placeholder="Username" required />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="f1">Gender</label>
                        <select id="gender" ref={genderRef} className=" border-1 px-1 outline-one text-black h-8" required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="none">Prefer not to say</option>
                        </select>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="f1">Email Address</label>
                        <input ref={emailRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="email" placeholder="Enter email address" required />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="f1">Password</label>
                        <input ref={passwordRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="password" placeholder="Enter password" required />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="f1">Confirm Password</label>
                        <input ref={passwordConfirmationRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="password" placeholder="Confirm password" required />
                    </div>
                </div>

                <div className="flex flex-row justify-between md:text-xs text-min">
                    <div className="flex flex-row-reverse gap-x-1">
                        <label htmlFor="f3" className="">Keep Me Logged In</label>
                        <input name="remember" className="border-1 bg-two" id='f3' type="checkbox" />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col justify-between mt-4 items-center gap-y-4">
                    <div className="md:text-xs text-min">Already have an account?<span><Link to={'/login'} className="font-bold text-one md:text-sm text-xs underline">Login</Link> here</span></div>
                    <input className="w-1/3 py-1 md:px-3 sm:px-2 px-1 md:text-lg sm:text-base xs:text-sm text-xs   rounded-lg text-white font-bold bg-two " type="submit" value='Register' />
                </div>
            </Form>
        </div>
    </>
}