import { memo, useState } from "react"
import SMSCard from "./SMSCard"
import { useStateContext } from "../../context/ContextProvider";
function Notifications({ NoteHandler }) {
    const {accNotification} = useStateContext();    
    return <div className="w-full min-h-screen fixed z-20 top-0 left-0">
        <div className="w-full h-screen fixed top-0 left-0" onClick={NoteHandler}></div>
        <div className="absolute right-6 top-20 w-60 max-h-72 h-max overflow-y-scroll overflow-x-hidden border-0 border-gray-400 rounded-sm shadow-lg">
                
            <div className="flex w-full h-full overflow-hidden transition-all ">
               
                <div className="absolute bg-white w-full h-full opacity-90"></div>
                <div className="bg-two fixed w-60 text-center font-semibold text-lg text-white">Notifications</div>
                <div className={`{"left-0" : "-left-60"} relative w-full h-full transition-all pt-7 `}>
                    {(accNotification && accNotification.companyNotification.length > 0) && accNotification.companyNotification.map((notification) => {
                        return <SMSCard key={notification.id} notification={notification} />
                    })}
                    {(accNotification && accNotification.companyNotification.length == 0) && <div className="text-xs h-12 flex items-center justify-center">
                        You don't have notification yet.        
                    </div>
                    }
                </div>              
            </div>
        </div>
    </div>
}
export default memo(Notifications);