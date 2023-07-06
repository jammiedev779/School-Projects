import { useState } from "react";
import Interests from "../components/SkillInterest/Interests";
import Skills from "../components/SkillInterest/Skills";

export default function SkillandInterest() {
    const [isNext, setNext] = useState("interest")
    const nextHandler = () => {
        setNext("skills")
    }
    const backHandler = () => { 
        setNext("interest")
    }
    return <div className="fixed top-0 left-0 h-full w-full bg-white z-10 flex flex-col justify-center items-center">
            <div className="relative flex overflow-x-hidden items-center justify-center py-4">
                <div className={`${isNext === "interest" ? 'left-0 relative' : '-left-full absolute'} transition-all`}>
                        <Interests />
                </div>
                <div className={`${isNext === "skills" ? 'left-1/2 -translate-x-1/2  relative' : '-right-full absolute'} transition-all`}>
                        <Skills />
                </div>
            </div>
        <div className="flex justify-center w-full gap-x-10">
            {isNext === "interest" ? <button className="bg-two hover:bg-one w-24 p-1 rounded-full font-semibold text-white" onClick={nextHandler}>Next</button>
                :
            <>
                    
                    <button className="bg-two hover:bg-one w-24 p-1 rounded-full font-semibold text-white" onClick={backHandler}>Back</button>
                <button className="bg-two hover:bg-one w-24 p-1 rounded-full font-semibold text-white" onClick={nextHandler}>Finish</button>                    
            </>
}
            
        </div>
    </div>
}