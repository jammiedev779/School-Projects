
import { Link } from "react-router-dom"
import ImageProfile from "../../Image/ImageProfile.jpg"
import {useStateContext} from "../../context/ContextProvider";

export default function ProfileMenuBar({profileHandler}) {
    const { user,company } = useStateContext();
    
    profileHandler(true)
    
    return <>
        <Link to={'/profile'} className='flex gap-x-6'>
            <div className="w-16 h-16 flex justify-center items-center">
                {user.profile_image && <img className="w-14 hover:w-16 h-14 hover:h-16 rounded-full" src={"http://localhost:8000/images/profile_image/"+ user.profile_image} alt="" />}
                {company.image && <img className="w-14 hover:w-16 h-14 hover:h-16 rounded-full" src={"http://localhost:8000/images/company/"+ company.image} alt="" />}
                {(!user.profile_image && !company.image) && <img className="w-14 hover:w-16 h-14 hover:h-16" src={ImageProfile} alt="" />}
            </div>
        </Link>
    </>
}