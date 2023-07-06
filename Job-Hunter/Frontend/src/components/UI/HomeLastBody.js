import ModalEmployer from "../UI/ModalEmployer";
import ImageBody2 from '../../Image/ImageBody2.png'
import { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";

export default function LastBody(){
    const [showMyModal, setShowMymodal] = useState(false)
    const handleOnClose = () => setShowMymodal(false)
    const {company} = useStateContext();
    const [link, setLink] = useState();
    const navigate = useNavigate();

    const handlePostJob = () => {
        if(Object.keys(company).length != 0){
            navigate('/Postjob')
        }
        else{
            setShowMymodal(true);
        }
    }
    return <>
        <div className='grid lg:grid-cols-3  grid-cols-2'>
            <div className='lg:col-span-2'>
                <img className='w-full' src={ ImageBody2} alt='' />
            </div>
            <div className=' pr-12 flex flex-col items-start justify-center font-semibold lg:gap-y-4 mn:gap-y-3 md:gap-y-2 gap-y-1 gap-0'>
                <label className='lg:text-5xl mn:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-serif'>Looking for the perfect candidate?</label>
                <label className='text-gray-500  md:text-xl sm:text-lg xs:text-sm text-min'>Post your job today and discover top talent that can take your business to the next level</label>
                
                <Link onClick={(handlePostJob)} className="relative cursor-pointer rounded px-5 py-2.5 overflow-hidden group bg-one hover:bg-gradient-to-r hover:from-one hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span class="relative">Post Job</span>
                </Link>
            </div>
            
        </div>
        <ModalEmployer onClose={handleOnClose} visible={showMyModal}/>
    </>
}