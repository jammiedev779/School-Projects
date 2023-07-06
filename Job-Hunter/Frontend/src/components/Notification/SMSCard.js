import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";

export default function SMSCard({ notification }) {
    const {user,accNotification,numNotification,setNumNotification} = useStateContext();
    const [haveSeen, setHaveSeen] = useState(notification.seen);
    const handleOnClick = (e) => {
        e.preventDefault();
        const payload = {
            seen: true
        }
        axiosClient.put(`/companyNotification/${notification.id}`,payload)
        .then(setHaveSeen(true));
        if(numNotification > 0 && !notification.seen){
            setNumNotification(numNotification-1);
        }
        window.open(`${notification.CV}`, '_blank');

    }
    return <>
        <Link onClick={handleOnClick} className="w-full h-12 shadow-sm">
            <div className={`absolute w-full h-12 bg-two ${haveSeen ? "opacity-0" :'opacity-10'}`}>

            </div>
            <div className={`w-full h-12 box-border p-1 border-b-xs border-gray-200 ${haveSeen ? "opacity-70" : 'opacity-100'}`}>
                <div className="text-sm font-semibold">{notification.title}</div>
                <div className="w-full text-xs truncate">{notification.body}</div>                
            </div>
        </Link>
    </>
}