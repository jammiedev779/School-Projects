import { Link, NavLink, useNavigation } from 'react-router-dom'
import IconLogo from '../Image/IconLogo.png'
import { useState, useEffect, useMemo, memo } from 'react'
import {useStateContext} from "../context/ContextProvider";
import axiosClient from "../axios-client";
import RegisterLoginMenuBar from './UI/RegisterLoginMenuBar';
import ProfileMenuBar from './UI/ProfileMenuBar';
import Notifications from './Notification/Notification';
import NotificationIcon from './MUI/NotificationIcon';
import { Skeleton } from '@mui/material';

export default memo(function MenuBar() {
    const {user, company, token, setAllPost, setAllCompany, setUser, setCompany, setToken, setCategories, setJobCategories, setApplied, setAccNotification, setBlogs, numNotification, setNumNotification} = useStateContext();
    const [isNotification, setNotification] = useState(false);
    const navigation = useNavigation('');
    const [profileLoading, setProfileLoading] = useState(false);
    const NotificationHandler = () => { 
        setNotification(!isNotification);
    }
    useEffect(() => {
        console.log("navigation")
    },[navigation.state])

    const [show, setShow] = useState(false)
    const showHandler = () => {
        setShow(!show)
    }
    const [leght, setLenght] = useState(0);
    let defaultY = window.pageYOffset
    let currentY = 0
    document.body.onscroll = () => {
        setLenght(((window.pageYOffset * 100) / (document.body.offsetHeight - window.innerHeight)))
        currentY = window.pageYOffset
        if (currentY < defaultY) {
            document.querySelector('#menubar').style.top="0"
        } else {
            if (currentY > 96) document.querySelector("#menubar").style.top = "-96px"
            setNotification(false)
            setShow(false)
        }
        defaultY = currentY
        
    }
    
    useEffect(() => {
        // Get authorized user
        setProfileLoading(false)
         axiosClient.get('/user')
        .then(({data}) => {
           if(data.type === "user"){
            setUser(data)
            axiosClient.get(`applied/${data.id}`)
                .then(({ data }) => {
                    setProfileLoading(true);
                setApplied(data);
            })
            .catch(e => console.log(e));
           }
           else if(data.type === "company"){
            setCompany(data)
            axiosClient.get(`/company/notification/${data.id}`)
                .then(({ data }) => {
                setProfileLoading(true)
                setAccNotification(data);
                setNumNotification(data.newCompanyNotification)
                setProfileLoading(true)
            })
            .catch(e => console.log(e))
            }
            setProfileLoading(true)
        })

        // Get Categories and Job Categories
        axiosClient
          .get("/category")
          .then(({ data }) => {
            setCategories(data);
          })
          .catch((e) => {
            console.log(e);
          });
    
        axiosClient.get("/job_category")
          .then(({ data }) => {
            setJobCategories(data);
          })
          .catch((e) => {
            console.log(e);
          });

        axiosClient.get("/blog").then(({data}) => {
            setBlogs(data.blogs);
        })
        .catch(e => console.log(e));

        axiosClient.get("/browse").then(({data}) => {setAllPost(data.posts)});

    }, [])

    const profileHandler = (val) => {
        setProfileLoading(val);
    }

    return <>
        
        {navigation.state === 'loading' && console.log("Hello") }
            <div className={`flex flex-col backdrop-blur-md transition-menu fixed z-10 w-full bg-white `} id='menubar'>
                <div className='flex items-center px-5 w-full  h-24 bg-white'>
                    
                    <Link to="/" className='mn:flex hidden'>
                        <img src={IconLogo} className='w-24 h-24' alt='Job Hunter' />
                    </Link>
                    
                <div className='ml-10 text-0D47A1 gap-x-6 font-bold text-lg mn:flex hidden uppercase'>
                        <NavLink to='/' className={({ isActive }) => isActive && 'border-b-2 border-0D47A1'}>Home</NavLink>
                        <NavLink to='/BrowseJob' className={({ isActive }) => isActive && 'border-b-2 border-0D47A1'}>Browse Job</NavLink>
                        <NavLink to='/resource' className={({ isActive }) => isActive && 'border-b-2 border-0D47A1'}>Resource</NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive && 'border-b-2 border-0D47A1'}>Contact</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive && 'border-b-2 border-0D47A1'}>About</NavLink>
                </div>
                {
                   token ? <div className='ml-auto mr-4 w-10 h-10 flex items-center justify-center cursor-pointer order-2' onClick={NotificationHandler}>
                        <NotificationIcon />
                    </div>
                        :
                        <div className='ml-auto'>

                        </div>
                }
                {token && (isNotification && <Notifications NoteHandler={NotificationHandler} />)}
                
                <div className='order-last'>
                    {localStorage.getItem('ACCESS_TOKEN')&&!profileLoading  && <Skeleton variant='circular' width={60} height={60} />}
                    {!token &&<RegisterLoginMenuBar />}
                    {token && (Object.keys(user).length != 0 && <ProfileMenuBar profileHandler={profileHandler} />)}
                    
                    {/* can change to company profile here */}
                    {token && (Object.keys(company).length != 0 && <ProfileMenuBar profileHandler={profileHandler} />)}    
                                 
                </div>

                    <div className='flex ml-3 flex-col gap-y-1 p-3 hover:bg-blue-100 mn:hidden order-first' onClick={showHandler}>
                        <hr className='border-2 w-10 border-one' />
                        <hr className='border-2 w-10 border-one' />
                        <hr className='border-2 w-10 border-one' />
                    </div>
                    <div className={`absolute flex gap-y-4 p-4 flex-col top-20 font-bold bg-white opacity-90 text-one mn:hidden shadow-2xl border-0 border-gray-100 transition-menu ${show ? 'left-0' : '-left-36'}`}>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink >Browse Job</NavLink>
                        <NavLink>Resource</NavLink>
                        <NavLink>Contact</NavLink>
                        <NavLink>About</NavLink>
                    </div>
                </div>
                <hr className="border-1 border-one" style={{ width: `${leght}%` }}></hr>
            </div>       
        
    </> 
})