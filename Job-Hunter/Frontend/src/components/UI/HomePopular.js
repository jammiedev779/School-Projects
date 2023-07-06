import PopularCard from "../UI/HomePopularCard";
import IconNextLeft from '../../Image/IconNextLeft.png'
import IconNextRight from '../../Image/IconNextRight.png'
import {useState, useEffect} from "react";
import axiosClient from "../../axios-client";
import SkeletonTopBrowse from "../MUI/SkeletonTopBrowse";
import { useStateContext } from "../../context/ContextProvider";

export default function HomePopular() {
    const [loading, setLoading] = useState(true);
    const {job_categories} = useStateContext();
    const [code, setCode] = useState([]);
    useEffect(() => {
        if(Object.keys(job_categories).length == 0)
            axiosClient
            .get("/job_category")
            .then(({ data }) => {
                setCode([data.map((item) => <PopularCard value={item} key={item.id}/>)])
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            });
        else {
            setCode([job_categories.map((item) => <PopularCard value={item} key={item.id}/>)])
            setLoading(false)
        }

      }, [loading]);
    
    return <>
        
        <div className="relative w-full flex items-center px-6">
            <div className="ml-auto" onClick={() => {
                if (!loading) {
                    document.getElementById('popular-category').scrollLeft -= 200
                }
                
            }} id="prev">
                <img className="w-7 cursor-pointer" src={IconNextLeft} alt="" />
            </div>
            <div className="col-span-10 w-11/12 overflow-hidden right-28">
                {loading ?<SkeletonTopBrowse/>
                    :
                    <div className="mx-7 h-56 scroll-smooth w-auto gap-y-10 grid grid-flow-col overflow-scroll justify-start items-start right-52  gap-x-10 mt-10 transition-all" id='popular-category' onScroll={(e) => {
                   
                    }}>
                        {
                            code.map(source => source)
                        }
                    </div>
                }
            </div>
            <div className="mr-auto" onClick={() => {
                if (!loading) {
                    document.getElementById('popular-category').scrollLeft += 200
                }
            }} id="next">
                <img className="w-7 cursor-pointer" src={IconNextRight} alt="" />
            </div>
        </div>

    </>
}

