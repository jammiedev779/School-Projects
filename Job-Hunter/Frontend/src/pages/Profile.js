import { Outlet, Navigate } from "react-router-dom";
import Option from "../components/Profile/Option"
import UserInfo from "../components/Profile/UserInfo";
import Edit from "../components/Profile/Edit";
import OptionC from "../components/CompanyProfile/Option";
import CompanyInfo from "../components/CompanyProfile/UserInfo";
import EditC from "../components/CompanyProfile/Edit";
import { useStateContext } from "../context/ContextProvider";

export default function Profile() {
    const {token, user, company} = useStateContext();

    if (!token) {
        return <Navigate to={'/'} />;
    }

    return <div className="bg-blue-50 w-full px-3 flex md:flex-row flex-col gap-x-5">
        {Object.keys(user).length != 0 && 
        <>
            <div className="md:w-96 w-full">
                <UserInfo/>
            </div>

            <div className="w-full">
                <div className='md:pt-28 pt-0'>

                </div>
                <div className="bg-white mb-4">
                    <Edit />
                </div>
                <div className="bg-white pt-4 shadow-xl pb-3 mb-4">
                    <Option />
                    <Outlet />                
                </div>

            </div>
        </>
        }
        {Object.keys(company).length != 0 && 
        <>
            <div className="md:w-96 w-full">
                <CompanyInfo/>
            </div>

            <div className="w-full">
                <div className='md:pt-28 pt-0'>

                </div>
                <div className="bg-white mb-4">
                    <EditC />
                </div>
                <div className="bg-white pt-4 shadow-xl pb-3 mb-4">
                    <OptionC />
                    <Outlet />                
                </div>

            </div>
        </>
        }
    </div>
}