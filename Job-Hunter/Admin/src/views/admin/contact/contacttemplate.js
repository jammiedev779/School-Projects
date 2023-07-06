import { useState } from "react";

export default function Contacttemplate({name,email,subject,phone,message,date}){
    const [SeeMore, setSeeMore] = useState(false);
    return <>
        <div className="container mx-auto mt-10">
            <div class="flex flex-col space-y-4">
    
            
                <div class="bg-white grid grid-cols-8 shadow rounded-lg p-6 ">
                    <div className="col-span-2">
                        <h3 class="text-lg font-semibold">{name}</h3>
                        <p class="text-gray-600">{email}</p>
                        <p class="text-gray-600">{phone}</p>
                        <p class="text-gray-400 text-sm">{date}</p>
                    </div>
                    <div className="flex flex-col col-span-6">
                        <p className="font-semibold text-gray-800 ">{subject}</p>
                        <p className={`text-gray-800 ${SeeMore?'line-clamp-none':'line-clamp-3'}`}>
                            {message}
                        </p>
                        <button onClick={() => {setSeeMore(!SeeMore)}} className="text-blue-800 ml-auto pt-1">{SeeMore?'See less':'See More'}</button>
                    </div>
                </div>

                
                

                
                

                
            </div>
        </div>
    </>
}