import LogoEzecom from "../../Image/ezecomlogo.png"
import axiosClient from "../../axios-client";
import { useState, useEffect} from "react";
import { useStateContext } from "../../context/ContextProvider";
import SkeletonListJob from "../../components/MUI/SkeletonListJob";
import { Form, useNavigate } from "react-router-dom";
import ModalEmployee from "./ModalEmployee";

export default function JobCard({ button,buttonStatus,post,apply}) {
    const {user} = useStateContext();
    const [company, setCompany] = useState([]);
    const [loading, setLoading] = useState(false);
    const [buttonChange, setButtonChange] = useState(apply);
    
    
    const navigate = useNavigate()

    const [showMyModal, setShowMymodal] = useState(false)
    const handleOnClose = () => setShowMymodal(false)

    const date = new Date(post.created_at);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const expireDate = new Date(post.expire_at);
    const formattedExpireDate = expireDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// handling button

    const handleApply = (e) => {
        e.preventDefault();
        if(Object.keys(user).length === 0){
            setShowMymodal(true)
        }else{
            if(!user.CV){
                window.alert('CV is required');
            }else{
                const applyPayload = new FormData();
                applyPayload.append('user_id',user.id);
                applyPayload.append('post_id',post.id);

                axiosClient.post('/apply',applyPayload)
                .then(({data}) => {
                    console.log('apply success');
                    applyPayload.append('company_id',post.company_id);
                    applyPayload.append('title',post.post_name);
                    applyPayload.append('body',user.name + " have applied to your Job Application.");
                    applyPayload.append('CV',user.CV);
                    return axiosClient.post('/companyNotification',applyPayload)
                })
                .then(({data}) => {
                    console.log(data.message);
                    setButtonChange(true)
                })
                .catch((e) => {
                    console.log(e);
                })
            }
            
        } 
    };

    const handleCancel = (e) => {
        e.preventDefault();
        axiosClient.delete(`apply/${user.id}/${post.id}`)
        .then(() => {
            console.log('cancel successfull');
            return axiosClient.delete(`companyNotification/${post.id}/${user.id}`)
        })
        .then(() => {
            setButtonChange(false)
        })
        .catch(e => console.log(e))
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const postJSON = JSON.stringify(post);
        localStorage.setItem('tempPost', postJSON);
        navigate(`/PostJob/edit/${post.company_id}`)
    }

    const handleClickJob = (e) => {
        e.preventDefault();
        const temJobJSON = JSON.stringify(post);
        localStorage.setItem('tempJob', temJobJSON);
        if(button === 'cancel'){
            navigate(`/JobDetail/true/${post.post_name}`)
        }else{
            navigate(`/JobDetail/false/${post.post_name}`)
        }
        
    }

    if(showMyModal){
        return <ModalEmployee onClose={handleOnClose} visible={showMyModal}/>
    }

    

    return <>
        
    {loading && <SkeletonListJob/>}
    {    
        <div className="px-2 py-2 mt-3 flex items-center justify-between rounded-lg border-1 border-white hover:border-blue-200 shadow-md hover:shadow-lg cursor-pointer">
            <div onClick={handleClickJob} className="flex items-center">
                <div>
                    <img className="lg:w-28 md:w-24 h-20 w-20 object-contain"  src={"http://localhost:8000/images/company/"+ post.image} alt="company_logo" />
                </div>
                <div className="lg:ml-6 md:ml-3 ml-2">
                    <div className="md:py-1 py-0">
                        <h3 className="lg:text-2xl md:text-xl text-one font-semibold">{post.post_name}</h3>
                    </div>
                    <div className="py-1 flex ">
                        <div className="flex">
                            <svg className="lg:w-4 md:w-3 w-3 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                            </svg>
                            <p className="text-gray-600 ml-2  lg:text-base md:text-xs text-2xs">{post.location}</p>
                        </div>
                        <div className="flex ml-6">
                            <svg className="lg:w-4 md:w-3 w-3 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p className="text-gray-600 ml-2 lg:text-base md:text-xs text-2xs">{post.category_name}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center text-end mr-3 pt-3">
                {(!buttonChange && button === "notEdit") &&
                    <button onClick={handleApply} className="lg:w-32 md:w-28 w-24 lg:text-base md:text-sm text-xs bg-one text-white py-2 px-2 font-bold rounded">{buttonStatus}</button>
                }
                {button === "edit" &&
                    <button onClick={handleEdit} className="lg:w-32 md:w-28 w-24 lg:text-base md:text-sm text-xs bg-one text-white py-2 px-2 font-bold rounded">{buttonStatus}</button>
                }
                {(buttonChange && button === "notEdit") &&
                    <button onClick={handleCancel} className="lg:w-32 md:w-28 w-24 lg:text-base md:text-sm text-xs bg-one text-white py-2 px-2 font-bold rounded">{buttonStatus}</button>
                }
                <p className="lg:text-sm md:text-xs text-2xs mt-2 text-gray-600 italic"><span className="text-red-500">Close Date: {formattedExpireDate}</span></p>
            </div>
        </div>
    }
    </>
}