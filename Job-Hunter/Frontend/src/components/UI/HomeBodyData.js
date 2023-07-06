import DataBackground from '../../Image/DataBackground.png'

import IconUserData from '../../Image/IconUserData.png'
import IconJobData from '../../Image/IconJobData.png'
import IconCompanyData from '../../Image/IconCompanyData.png'
import { useEffect, useState } from 'react'
import axiosClient from '../../axios-client'
export default function BodyData() {
    const [numUsers, setNumUsers] = useState();
    const [numPosts, setNumPosts] = useState();
    const [numCompaniess, setNumCompanies] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient.get('amount/user/post/company')   
        .then(({data}) => {
            setNumUsers(data.numUsers);
            setNumPosts(data.numPosts);
            setNumCompanies(data.numCompanies);
            setLoading(false);
        })
        .catch(e => {
            console.log(e);
            setLoading(false);
        })
    })
    if(loading){
        return <>
        <div className=' w-full h-auto flex items-center'>
            <div className='w-full bg-one absolute' >
                <img className='w-full opacity-20' src={DataBackground} alt="" />
            </div>     
            <div className='relative grid grid-cols-3 w-full items-center justify-center lg:text-4xl mn:text-3xl md:text-2xl sm:text-xl text-lg'>
                <div className='flex lg:gap-y-2 md:gap-1 gap-0 flex-col text-white font-semibold  items-center justify-center'>
                    <img className='lg:w-20 mn:w-16 md:w-12 sm:w-9 xs:w-6 w-4 lg:h-20 mn:h-16 md:h-12 sm:h-9 xs:h-6 h-4' src={IconUserData} alt='' />
                    <label>1000</label>
                    <label>Users</label>
                </div>
                <div className='flex lg:gap-y-2 md:gap-1 gap-0 flex-col text-white font-semibold  items-center justify-center'>
                    <img className='lg:w-20 mn:w-16 md:w-12 sm:w-9 xs:w-6 w-4 lg:h-20 mn:h-16 md:h-12 sm:h-9 xs:h-6 h-4' src={IconJobData} alt='' />
                    <label>999</label>
                    <label>Jobs</label>
                </div>
                <div className='flex lg:gap-y-2 md:gap-1 gap-0 flex-col text-white font-semibold  items-center justify-center'>
                    <img className='lg:w-20 mn:w-16 md:w-12 sm:w-9 xs:w-6 w-4 lg:h-20 mn:h-16 md:h-12 sm:h-9 xs:h-6 h-4' src={IconCompanyData} alt='' />
                    <label>36</label>
                    <label>Companies</label>
                </div>
            </div>
        </div>
    </>
    }
    return <>
            <div className='w-full h-auto flex items-center'>
                <div className='w-full bg-one absolute' >
                    <img className='w-full opacity-30' src={DataBackground} alt="" />
                    
                </div>     
                <div className='absolute grid grid-cols-3 w-full items-center justify-center lg:text-2xl mn:text-xl md:text-lg sm:text-base text-sm'>
                    <div className='flex lg:gap-y-2 md:gap-1 gap-0 flex-col text-white font-semibold  items-center justify-center'>
                        <img className='lg:w-20 mn:w-16 md:w-12 sm:w-9 xs:w-6 w-4 lg:h-20 mn:h-16 md:h-12 sm:h-9 xs:h-6 h-4' src={IconUserData} alt='' />
                        <label>{numUsers}</label>
                        <label>Users</label>
                    </div>
                    <div className='flex lg:gap-y-2 md:gap-1 gap-0 flex-col text-white font-semibold  items-center justify-center'>
                        <img className='lg:w-20 mn:w-16 md:w-12 sm:w-9 xs:w-6 w-4 lg:h-20 mn:h-16 md:h-12 sm:h-9 xs:h-6 h-4' src={IconJobData} alt='' />
                        <label>{numPosts}</label>
                        <label>Jobs</label>
                    </div>
                    <div className='flex lg:gap-y-2 md:gap-1 gap-0 flex-col text-white font-semibold  items-center justify-center'>
                        <img className='lg:w-20 mn:w-16 md:w-12 sm:w-9 xs:w-6 w-4 lg:h-20 mn:h-16 md:h-12 sm:h-9 xs:h-6 h-4' src={IconCompanyData} alt='' />
                        <label>{numCompaniess}</label>
                        <label>Companies</label>
                    </div>
                </div>
            </div>
        </>
}