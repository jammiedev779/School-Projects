

import ImageProfile from "../../Image/ImageProfile.jpg"
import Profile from "../UI/Profile"
import { useState, useEffect, useRef } from 'react'
import Skill from '../UI/Skill'
import IconTakePhoto from "../../Image/IconTakePhoto.avif"
import IconUpload from "../../Image/IconUpload.png"
import UploadeImage from '../UI/UploadImage'
import {useStateContext} from "../../context/ContextProvider";
import axiosClient from "../../axios-client"
import {  useNavigate } from "react-router-dom"
import LinearIndeterminate from "../MUI/LinearIndeterminate"


export default function VisitUserInfo() {
    const {user} = useStateContext();
    const [isShowImage, setShowImage] = useState(false)
    const [isUploadImage, setUploadImage] = useState(false)
    const [isLogout,setIsLogout] = useState(false)
    const navigate = useNavigate()
    const [profileImage, setProfileImage] = useState();

    const showImageHandler = () => {
        setShowImage(!isShowImage)
    }
    const uploadImageHandler = () => { 
        setUploadImage(!isUploadImage)
    }
    const onLogout = ev => {
        setIsLogout(!isLogout)
        ev.preventDefault()
        axiosClient.post('/logout')
            .then(() => {
                navigate('/login')
            })
        setIsLogout(!isLogout)
    }

    const handleCVchange = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('CV', e.target.files[0]);
        axiosClient.post(`users/cv/${user.id}`,formData)
        .then(({data}) => {
            console.log(data.message);
            window.location.reload()
        })
        .catch((e) => {
            console.log(e);
            window.location.reload()
        })
    }

    useEffect(() =>{
        if(user && !user.profile_image){
            setProfileImage(ImageProfile);
        }else{
            setProfileImage("http://localhost:8000/images/profile_image/"+ user.profile_image)
        }
    })

    const handleDownloadCV = () => {
        // Not working yet
        if (user && user.CV) {
            axiosClient({
              url: `users/cv/download/${user.CV}`,
              method: 'GET',
              responseType: 'blob',
            })
              .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.pdf');
                link.setAttribute('type', 'application/pdf');
                document.body.appendChild(link);
                link.click();
              })
              .catch((e) => {
                console.log(e);
              });
          }          
    }

    
    return <>
        {
            isLogout&&<LinearIndeterminate/>
        }
        <div className='mb-4'>
            <div className='pt-28'>
            </div>
            {isUploadImage && <UploadeImage state={uploadImageHandler} profileImage={profileImage}/>}

            <div className="flex items-center w-full flex-col bg-white p-6 shadow-xl gap-y-4">
                {
                    isShowImage &&
                    <div className='fixed w-full h-full z-20 top-0 left-0' onClick={showImageHandler}>
                        <div className='absolute w-full h-full bg-black opacity-25'></div>
                        <img className='absolute w-96 h-96 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' src={profileImage} alt="" />
                    </div>
                }
                <div className='flex flex-col justify-center items-center'>
                    <div className="w-max p-4" >
                        <Profile src={profileImage} w={40} h={40} onclick={showImageHandler} />
                        <img className="absolute cursor-pointer w-8 drop-shadow-lg float-right -translate-y-11" src={IconTakePhoto} alt="" onClick={uploadImageHandler} />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className='text-3xl font-bold text-one'>{user.name}</span>
                        <span className='text-two'>{user.username}</span>
                        <a href='mailto:davann.tet@student.cadt.edu.kh' className='text-two underline'>{user.email}</a>
                    </div>
                </div>
                <div className='text-center'>
                    {user.bio}
                </div>
                <div className='w-full'>
                    <label className='text-2xl text-one font-semibold'>Skills</label>
                    <div className='flex flex-wrap gap-x-1 gap-y-2 mt-2'>
                        <Skill title={'User Interface Designing'} />
                        <Skill title={'Java '} />
                        <Skill title={'C# programing'} />
                        <Skill title={'Photoshop'} />
                        <Skill title={'Photoshop'} />
                        <Skill title={'Photoshop'} />
                        <Skill title={'Photoshop'} />
                    </div>
                </div>
                {/* <div className="w-full flex flex-col">
                    <label className='text-2xl text-one font-semibold '>CV {user.CV && <span className=" text-sm">: {user.CV}</span>}</label>
                    <div className="flex justify-start gap-x-3">
                        <button onClick={handleDownloadCV} className="bg-one flex px-3 py-1 text-xs rounded-full text-white font-bold gap-x-1 justify-center items-center mt-5 cursor-pointer hover:text-sm hover:bg-two">
                            Download CV
                        </button>
                        <label htmlFor="upload-cv" className="bg-one flex px-3 py-1 text-xs rounded-full text-white font-bold gap-x-1 justify-center items-center mt-5 cursor-pointer hover:text-sm hover:bg-two">
                            <span>Upload CV</span>
                            <img src={IconUpload} className="w-6 h-5 " alt="Upload CV" />
                        </label>
                        <input type="file" accept=".pdf" id="upload-cv" hidden onChange={handleCVchange}/>
                    </div>
                </div> */}

            </div>

        </div>
    </>
}