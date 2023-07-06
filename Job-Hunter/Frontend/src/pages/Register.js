import { Link } from "react-router-dom";
import RegisterForm from "../components/Register/RegisterForm";
import RegisterCompanyForm from "../components/Register/RegisterCompanyForm";
import { useState } from "react";
import jobHunter from "../Image/jobHunter.webp"
export default function Register() {
    const [swap, setSwap] = useState(false)
    const swapHandler = () => {
        setSwap(!swap)
    }
    return <main className="absolute w-full h-full bg-white z-40">
        <Link to={'..'} className="font-semibold text-black  md:px-6 sm:px-4 xs:px-1 px-2 md:text-sm text-xs  py-1 rounded-lg ml-1 fixed z-20 underline">Go Home</Link>
        <div className="absolute w-full p-3 flex justify-center items-center h-screen flex-col">
            <div className="absolute w-full h-full opacity-80">
                <img className="w-full h-full" src={jobHunter} alt=""/>
            </div>

            <div className="relative lg:w-1/2 w-2/3 overflow-hidden flex items-center justify-center ">
                <div className="absolute w-full h-full bg-white opacity-90 rounded-lg">

                </div>
                <div className={` ${swap ? 'left-0 relative' : 'right-full absolute'} transition-all`}>
                    <RegisterCompanyForm swapper={swapHandler}/>
                </div>
                <div className={` ${swap ? '-left-full absolute' : 'left-0 relative'} transition-all w-full`}>
                    <RegisterForm swapper={swapHandler}/>
                </div>
                
            </div>
        </div>
    </main>
}