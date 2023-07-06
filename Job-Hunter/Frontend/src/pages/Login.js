import { Link } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import jobHunter from "../Image/jobHunter.webp"
export default function Login() {
    return <main className="absolute w-full h-full bg-white z-20 pt-3">
        <div className="fixed top-0 left-0 w-full h-full">
            <img className="w-full h-full opacity-70" src={jobHunter} alt="" />
        </div>
       
        <Link to={'..'} className="font-semibold text-black  md:px-6 sm:px-4 xs:px-1 px-2 md:text-sm text-xs  py-1 rounded-lg ml-1 fixed z-20 underline">Go Home</Link>
        <div className="fixed top-0 left-0  items-center justify-center w-full h-full  flex">
            <div className="absolute w-max h-max rounded-3xl flex items-center justify-center">
                <div className="absolute w-full h-full bg-white rounded-lg opacity-90"></div>
                <LoginForm />
            </div> 
        </div>         
        </main>
}