import { useParams } from "react-router-dom" 
import ImageVerify from "../Image/ImageVerify.png"
export default function Verify() {
    const param = useParams()
    console.log(param)
    return <>
        <div className="fixed top-0 left-0 w-full h-full bg-white z-30 flex items-center justify-center flex-col gap-y-4 ">
            <div className=" w-1/2 absolute ">
                <img className="w-full opacity-30" src={ImageVerify } alt=""/>
            </div>
            <div className="absolute flex flex-col justify-center items-center gap-y-5 border-1 border-white  p-6 w-80 rounded-xl shadow-xl">
                <div className="text-4xl ">Welcome!</div>
                <div className="  p-4 text-lg font-semibold">A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your email.</div>
            </div>
        </div>
    </>
}