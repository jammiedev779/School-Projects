
import JobCard from "../components/UI/JobCard"
import JobFilter from "../components/UI/JobFilter"
import axiosClient from "../axios-client";
import {useState, useEffect, memo} from "react";
import SkeletonListJob from "../components/MUI/SkeletonListJob";
import { useStateContext } from "../context/ContextProvider";
import { Pagination, Slide } from "@mui/material";
import ModalEmployee from "../components/UI/ModalEmployee";


export default memo(function BrowseJob() {
    const [sliceData, setSliceData] = useState([]);
    const [data, setData] = useState([]);
    const [isFilter, setFilter] = useState(false)
    const pageNum = 5//number of card in one slice
    const filterHandler = ()=>{
        setFilter(!isFilter)
    }
    const {user, applied, allPost} = useStateContext();
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

      const handleDataFromChild = (data) =>{
        setPost(data);
      }

    const checkAppliedJob = (post) => {
      return applied.some(apply => apply.post_id === post.id);
    }

    useEffect(() => {
        if(Object.keys(allPost).length == 0){
            axiosClient.get('/search')
            .then(({data}) => {
                setPost(data);
                setLoading(false);
            })
            .catch(e => {console.log(e); setLoading(false)});
        }
        else{
            setPost(allPost);
            setLoading(false);
        }
    },[])

    useEffect(() => { 
        setSliceData(posts.slice(0, pageNum));
        setData(posts)
    }, [posts])
    const dataHandler = (data) => {
        setSliceData(data);
    }
    const sliceHandler = (num) => {
        setSliceData(data.slice(pageNum * (num - 1), pageNum *num))
    }
    return <div className="pt-24"> 
        <div className=" w-full bg-one lg:h-36 md:h-28 h-20 flex items-center justify-between px-10">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">Browse Job</h1>
        </div>

        <div className=" mx-auto bg-white px-6 py-10 grid md:grid-cols-4 grid-cols-3">
            {/* Filter container */}
            <JobFilter className="hidden md:flex flex-col" sendDataToParent={handleDataFromChild} sliceData={dataHandler} />
            {/* Job listing container */}
            <div className="lg:ml-6 md:ml-3 lg:px-4 md:px-2 col-span-3 ">
                <div className="flex justify-between">
                    <h3 className="lg:text-2xl md:text-xl text-one font-semibold">Job Listing</h3>
                    <button className="lg:text-xl md:text-lg text-one bg-white border-1 border-one rounded w-20 flex items-center justify-center md:hidden" onClick={filterHandler}>
                        <svg className="w-4 mr-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"></path>
                        </svg>
                        Filter
                    </button>
                </div>
                
                {/* Filter container */}
                <JobFilter className={`${isFilter ? 'flex' : 'hidden'} md:hidden flex-col  overflow-y-hidden`} sendDataToParent={handleDataFromChild} sliceData={dataHandler} />

                {/* Job card */}
                {loading && <SkeletonListJob/>}
                <div className="" style={{height:'92vh'}}>
                    {sliceData?.map((post) => {
                        const currentDate = new Date();
                        const post_date = new Date(post.expire_at);

                        if (post_date > currentDate) {
                            if (Object.keys(user).length != 0 && applied.length > 0) {
                                if (checkAppliedJob(post) === false) {
                                    return <JobCard key={post.id} apply={false} button={"notEdit"} buttonStatus={'Apply Now'} post={post} />
                                } else {
                                    return <JobCard key={post.id} apply={true} button={"notEdit"} buttonStatus={'Cancel'} post={post} />
                                }
                            } else {
                                return <JobCard key={post.id} apply={false} button={"notEdit"} buttonStatus={'Apply Now'} post={post} />
                            }

                        }
                        //return <JobCard key={post.id} button={"apply"} buttonStatus={'Apply Now'} post={post} />
                    })}
                </div>
                <div className="my-8">
                    <Pagination count={Number.parseFloat(data.length / pageNum) > Number.parseInt(data.length / pageNum) ? Number.parseInt(data.length / pageNum) + 1 : Number.parseInt(data.length / pageNum)} variant="outlined" color="primary" shape="rounded" onChange={(e, pageNumber) => {
                        console.log(pageNumber)
                        sliceHandler(pageNumber)
                    }} />
                </div>
            </div>

        </div>

    </div>
})