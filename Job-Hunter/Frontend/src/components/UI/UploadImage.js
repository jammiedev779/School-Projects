import { Form } from "react-router-dom"; 
import ImageProfile from "../../Image/ImageProfile.jpg"
import IconUpload from "../../Image/IconUpload.png"
import { useRef, useState } from "react";
import UploadProfile from "../../Firebase/UploadProfile";
import {useStateContext} from "../../context/ContextProvider";
import axiosClient from "../../axios-client"

export default function UploadeImage(props) {
    const {user} = useStateContext();
    const [imageUrl, setImageUrl] = useState(props.profileImage);
    const imageRef = useRef();

    const imageHandler = () => {
        if (imageRef.current) {
            try {
                setImageUrl(URL.createObjectURL(imageRef.current.files[0]))      
            } catch (e) {
                console.log(e)
            }
                  
        }
        
    }
    const changeHandler = (e) => {
        e.preventDefault();
        UploadProfile(imageRef.current.files[0]).then((link) => {
            console.log("Link:"+link)
        })

        const formData = new FormData();
        formData.append('profile_image', imageRef.current.files[0]);
        axiosClient.post(`users/profile/${user.id}`,formData)
        .then(({data}) => {
            console.log(data.message);
            window.location.reload()
        })
        .catch((e) => {
            console.log(e);
            window.location.reload()
        })
    }

    return <>
        <div className="fixed w-full h-full top-0 left-0 z-40">
            <div className="bg-black opacity-20 absolute w-full h-full" onClick={props.state}>
            </div>
            <Form className="rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-72 h-80 pt-3">
                <label htmlFor="upload-image">
                    <div className="flex items-center justify-center w-60 h-60 mx-auto">
                        <div className="mx-auto mt-5 w-60 h-60 overflow-hidden opacity-50">
                        <img className="bg-black w-full" src={imageUrl} alt=""/>
                    </div>
                    <div className="absolute rounded-full mx-auto mt-5 w-60 h-60 overflow-hidden">
                        <img className="bg-black w-full" src={imageUrl} alt=""/>
                    </div>
                    </div>
                </label>
                <input ref={imageRef} onChange={imageHandler} id="upload-image" type="file" accept=".png,.jpeg,.jpg" hidden/>
                <button onClick={changeHandler} type="submit" className="bg-one  mx-auto flex px-3 py-1 text-xs rounded-full text-white font-bold gap-x-1 justify-center items-center mt-6 cursor-pointer hover:text-sm hover:bg-two">
                        <span>Apply</span>
                        <img src={IconUpload} className="w-6 h-5 " alt="Upload CV" />
                </button>
            </Form>
        </div>
    </>
}