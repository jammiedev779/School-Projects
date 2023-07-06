import { Link, redirect, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import parse from 'html-react-parser'

export default function BlogBody(){
    const {blogs,setBlogs} = useStateContext();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const saveToLocalStorage = (blog) => {
        const temBlogJSON = JSON.stringify(blog);
        localStorage.setItem('tempBlog', temBlogJSON);
  }

    useEffect(() => {
        if(!blogs){
            axiosClient.get('/blog')
            .then(({data}) => {
                setBlogs(data.blogs);
                setLoading(false)
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            })
        }else{
            setLoading(false);
        }
    },[])
    
    if(loading){
        return <div></div>
    }
    return <>
    <div className="relative w-full py-6 px-16 grid lg:px-16 lg:gap-10 md:grid-cols-3 md:px-9 sm:px-28 grid-cols-1  gap-4"> 
    { blogs && blogs.slice(-3).map(blog => {
            return <div onClick={() => {saveToLocalStorage(blog); navigate(`/resource/details/${blog.id}`)}} className="bg-white pb-3 grid gap-y-2 rounded-md shadow-md hover:shadow-xl cursor-pointer">
            <div>
                <img className="w-full h-48 rounded-md " src={"http://localhost:8000/images/blogs/" + blog.image}  alt="not found" />
            </div>
            <div className="h-12 line-clamp-2">
                <p className="px-5 text-center text-md font-semibold text-one">{blog.title}</p>
            </div>
            <p className="px-5 text-center lg:line-clamp-3 sm:line-clamp-2 line-clamp-3">
                {parse(blog.article)}
            </p>
            <hr className="text-gray-500 mx-3" />
            <button className="text-one hover:text-blue-900">Read more &gt;</button>
        </div> 
        })
    }
    </div>
        
        <div className="text-center mt-2 mb-4">
            <Link to="/resource" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-one transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-one group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 text-one" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Visit Blog</span>
            </Link> 
        </div>
        
    </>
}