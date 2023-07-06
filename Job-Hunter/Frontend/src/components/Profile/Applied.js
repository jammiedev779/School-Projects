import JobCard from "../UI/JobCard";
import axiosClient from "../../axios-client";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import SkeletonListJob from "../MUI/SkeletonListJob";

export default function Applied() {
    const {user} = useStateContext();
    const [applied,setApplied] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [waitForApplied, setWaitForApplied] = useState(true);

    useEffect(() => {
        axiosClient.get(`/applied/${user.id}`)
        .then(({data}) => {
        const promises = data.map((res) => axiosClient.get(`/post/${res.post_id}`));
        Promise.all(promises)
        .then((responses) => {
        const data = responses.map((response) => response.data);
        const uniqueData = data.filter((value, index, self) => self.indexOf(value) === index);
        setApplied(uniqueData);
        setLoading(false);
        })
        })
        .catch((e) => {
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
                {applied.length == 0 && <div className="text-center pt-3">No Result</div>}
                {applied.map((post) => {
                    return <JobCard key={post.id} button={"cancel"} buttonStatus={'Cancel'} post={post} />
                })}

            </div>
        }
    </>
}