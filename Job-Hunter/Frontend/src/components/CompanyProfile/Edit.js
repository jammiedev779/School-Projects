import axiosClient from "../../axios-client";
import IconEdit from '../../Image/IconEdit.png'
import { useState, useRef } from 'react'
import {useStateContext} from "../../context/ContextProvider";
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function Edit() {
    const {company} = useStateContext();
    const [isEdite, setEdite] = useState(false)

    //Ref Hook
    const emailRef = useRef();
    const nameRef = useRef();
    const managerRef = useRef();
    const websiteRef = useRef();
    const bioRef = useRef();
    const locationRef = useRef();


    //Location
    const locations = [
        'Phnom Penh','Banteay Meanchey','Battambang','Kampong Cham','Kampong Chhnang',
        'Kampong Speu','Kampong Thom','Kampot','Kandal','Kep','Koh Kong','Kratie',
        'Mondulkiri','Oddar Meanchey','Pailin','Preah Sihanouk','Preah Vihear','Prey Veng',
        'Pursat','Ratanakiri','Siem Reap','Stung Treng','Svay Rieng','Takeo','Tboung Khmum'
      ];

    //send edit Request
    const editeHandler = (e)=>{
        setEdite(!isEdite)
        
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            name: nameRef.current.value,
            manager: managerRef.current.value,
            website: websiteRef.current.value,
            location: locationRef.current.value,
            bio: bioRef.current.value,
        }
        console.log(payload)
        axiosClient.put(`/company/${company.id}`,payload)
        .then(({data}) => {
            console.log(data.message)
        })
        .catch((error) => {
            const response = error.response;
            if(response && response.status === 422){
                console.log(response.data.errors);
            }
        })
    }
    
    return <div className="p-6 rounded-xl ">
        
        <div  className={`float-right cursor-pointer w-max ${isEdite&&'hidden'}`} onClick={editeHandler}>
            
            <EditNoteIcon fontSize="large" className="w-10 h-10 text-bold text-one hover:text-blue-600" />
        </div>
        
        <div className="mb-6 w-max mx-auto text-3xl font-semibold">Person Information</div>
        <div className={`flex ${!isEdite && 'hidden'}`}>
            <div className="flex flex-col gap-y-2 w-32">
                <label className="information-label">Name</label>
                <label className="information-label">Email</label>
                <label className="information-label">Manager</label>
                <label className="information-label">Website</label>
                <label className="information-label">Location</label>
                <label className="information-label">Bio</label>
                {/* <label className="information-label h-11">Profile</label>
                <label className="information-label h-11">CV</label> */}
                
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <input ref={nameRef} className="information" type="text" defaultValue={company.name} />
                <input ref={emailRef} className="information" type="email" defaultValue={company.email} />
                <input ref={managerRef} className="information" type="text" defaultValue={company.manager} />
                <input ref={websiteRef} className="information" type="text" defaultValue={company.website} />
                <select
                  ref={locationRef}
                  className="information"
                  defaultValue={company.location}
                >
                  {locations.map((province) => (
                    <option value={province}> {province} </option>
                  ))}
                </select>
                <input ref={bioRef} className="information" type="text" defaultValue={company.bio} />
                {/* <input className="information h-11 file:bg-one file:border-0 file:text-white file:font-semibold" type="file" accept=".png,.jpg"/>
                <input className="information h-11 file:bg-one file:border-0 file:text-white file:font-semibold" type="file"  accept=".pdf"/> */}
            </div>
        </div>
        <div className="flex justify-center gap-x-5">
            <div onClick={editeHandler} className={`${!isEdite && 'hidden'} w-28 h-10  font-bold text-white flex items-center justify-center uppercase rounded-full bg-gray-600 hover:bg-gray-400 mt-4 cursor-pointer`}>
                Cancel
            </div>   
            <div onClick={editeHandler} className={`${!isEdite && 'hidden'} w-28 h-10 hover:bg-blue-600  font-bold text-white flex items-center justify-center uppercase rounded-full bg-one  mt-4 cursor-pointer`}>
                Change
            </div>
        </div>

    </div>
}