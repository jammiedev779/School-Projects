import JobCard from "../UI/JobCard";
import axiosClient from "../../axios-client";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import SkeletonListJob from "../MUI/SkeletonListJob";

export default function Posted() {
    const {company} = useStateContext();
    const [posted,setPosted] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([])

    useEffect(() => {
            setLoading(true)
          axiosClient.get(`/posted/${company.id}`)
            .then(({data}) => {
              setPosted(data.posted);
              setLoading(false);
            })
            .catch((e) => {
              setError(e);
              setLoading(false);
            })
        
      }, [])

  return <>
    {
      loading ?
        <div className="mt-4 box-border px-5">
            <SkeletonListJob />                    
        </div>
        :
        <div className="mb-4">
            {posted.map((post) => {
               return <JobCard key={post.id} button={"edit"} buttonStatus={'Edit'} post={post} />
            })}

        </div>      
      }

    </>
}