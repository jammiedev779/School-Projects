

import ImageProfile from "../../Image/ImageProfile.jpg"
import Profile from "../UI/Profile"
import { useState, useEffect, useRef } from 'react'
import Skill from '../UI/Skill'
import IconTakePhoto from "../../Image/IconTakePhoto.avif"
import IconUpload from "../../Image/IconUpload.png"
import UploadeImage from '../UI/UploadImage'
import {useStateContext} from "../../context/ContextProvider";
import axiosClient from "../../axios-client"
import { Navigate, redirect, useNavigate } from "react-router-dom"
import LinearIndeterminate from "../MUI/LinearIndeterminate"
import EditIcon from '@mui/icons-material/Edit';
import FavoriteOption from "../MUI/FavoriteOption"
import EmailIcon from '@mui/icons-material/Email';
import FireUploadCV from "../../Firebase/FireUploadCV"
import CircularUnderLoad from "../MUI/CircularUnderLoad"

export default function UserInfo() {
    const {company} = useStateContext();
    const [isShowImage, setShowImage] = useState(false)
    const [isUploadImage, setUploadImage] = useState(false)
    const [isLogout,setIsLogout] = useState(false)
    const navigate = useNavigate()
    const [profileImage, setProfileImage] = useState();
    const [isFavorites, setFavorites] = useState(false);
    const [cvUploading,setCVUploading] = useState(false);
    const showImageHandler = () => {
        setShowImage(!isShowImage)
    }
    const uploadImageHandler = () => { 
        setUploadImage(!isUploadImage)
    }
    const favoriteHandler = () => { 
        setFavorites(!isFavorites)
    }
    const onLogout = ev => {
        setIsLogout(!isLogout)
        ev.preventDefault()
        axiosClient.post('/logout')
            .then(() => {
                localStorage.removeItem('ACCESS_TOKEN')
                window.location.reload();
            })
        setIsLogout(!isLogout)
    }

    useEffect(() =>{
        if(company && !company.image){
            setProfileImage(ImageProfile);
        }else{
            setProfileImage("http://localhost:8000/images/company/"+ company.image)
        }
    })

    
    return <>
        {
            isLogout&&<LinearIndeterminate/>
        }
        <div className='mb-4'>
            {cvUploading&&
                <CircularUnderLoad />
            }
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
                        <span className='text-3xl font-bold text-one'>{company.name}</span>
                        <span className='text-two'>{company.manager}</span>
                        
                    </div>
                </div>

                <div className='text-center'>
                    {company.bio}
                </div>
                <div className="w-full flex flex-col">
                    <label className='text-2xl text-one font-semibold'>Email</label>
                    <div className="flex gap-x-1 pl-1 mt-2 items-center">
                        <EmailIcon fontSize="medium" className="text-one text-6xl" /> <a href='mailto:davann.tet@student.cadt.edu.kh' className='text-two underline'>{company.email}</a>
                    </div>
                </div>

                <div className="h-12 w-full flex items-center cursor-pointer" onClick={onLogout}>
                    <div className="bg-white border-1 border-red-500 text-red-500 w-full font-bold uppercase text-center text-base hover:bg-red-400 hover:text-white">
                        Logout
                    </div>
                </div>

            </div>

        </div>
    </>
}