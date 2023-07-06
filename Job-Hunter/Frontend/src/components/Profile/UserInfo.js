

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
    const {user} = useStateContext();
    const [isShowImage, setShowImage] = useState(false)
    const [isUploadImage, setUploadImage] = useState(false)
    const [isLogout,setIsLogout] = useState(false)
    const navigate = useNavigate()
    const [profileImage, setProfileImage] = useState();
    const [isFavorites, setFavorites] = useState(false);
    const cvRef = useRef();
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
    //uploadd cv or change cv
    const UploadCvHandler = () => {
        setCVUploading(true)
        FireUploadCV(cvRef.current.files[0]).then((link) => { 
            const payload = {
                CV: link
            }
            axiosClient.put(`/users/cv/${user.id}`,payload)
            .then(() => {
                setCVUploading(false)
                window.location.reload();
            })
        })
        
    }
    
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
                        <span className='text-3xl font-bold text-one'>{user.name}</span>
                        <span className='text-two'>{user.username}</span>
                        
                    </div>
                </div>

                <div className='text-center'>
                    {user.bio}
                </div>
                <div className="w-full flex flex-col">
                    <label className='text-2xl text-one font-semibold'>Email</label>
                    <div className="flex gap-x-1 pl-1 mt-2 items-center">
                        <EmailIcon fontSize="medium" className="text-one text-6xl" /> <a href='mailto:davann.tet@student.cadt.edu.kh' className='text-two underline'>{user.email}</a>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="flex justify-between">
                        <label className='text-2xl text-one font-semibold'>Skills</label>
                        <div onClick={favoriteHandler}>
                            <EditIcon className="text-one hover:text-two" fontSize="medium" />
                        </div>
                    </div>
                    {
                        isFavorites &&
                        <div className="fixed top-0 left-0 w-full h-full z-0 flex justify-center items-center">
                            <div className="absolute w-full h-full top-0 left-0 bg-white opacity-70" onClick={favoriteHandler}></div>
                            <div className="bg-white absolute">
                                <FavoriteOption />
                            </div>
                        </div>
                    }
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
                <div className="w-full flex flex-col">
                    <label className='text-2xl text-one font-semibold '>Curriculum Vitae</label>
                    <div className="flex justify-start gap-x-3">
                        <button className="bg-one flex px-3 py-1 text-sm rounded-full text-white font-bold gap-x-1 justify-center items-center mt-5 cursor-pointer hover:bg-blue-600">
                            {user.CV && <a href={user.CV} target="_blank">Download CV</a>}
                            {!user.CV && <a>Download CV</a>}
                        </button>
                        <label htmlFor="upload-cv" className="bg-one flex px-3 py-1 text-sm rounded-full text-white font-bold gap-x-1 justify-center items-center mt-5 cursor-pointer hover:bg-blue-600">
                            {!user.CV && <span>Upload CV</span>}
                            {user.CV && <span>Change CV</span>}
                            <img src={IconUpload} className="w-4 h-3 " alt="Upload CV" />
                        </label>
                        <input ref={cvRef} type="file" accept=".pdf" id="upload-cv" hidden onChange={UploadCvHandler}/>
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