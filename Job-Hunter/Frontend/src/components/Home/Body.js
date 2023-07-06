import BodyData from "../UI/HomeBodyData";
import LastBody from "../UI/HomeLastBody";
import BlogBody from "../UI/HomeBlog";
import HomePopular from "../UI/HomePopular";


export default function Body() {
    
    return <>
        <div className="w-full">
            <div className="text-center text-one font-bold font-sans md:text-3xl sm:text-2xl xs:text-xl text-lg md:mt-10 sm:mt-7 xs:mt-4 mt-3">Browse Top Categories</div>
            <div className="relative">
                <HomePopular />
            </div>
            <div className="relative lg:mt-64 mn:mt-52 md:mt-40 sm:mt-40 mt-28">
                <BodyData />
            </div>
            <div className="relative lg:mt-64 mn:mt-52 md:mt-40 sm:mt-40 mt-28">
                <div className="text-center text-one font-bold font-sans md:text-3xl sm:text-2xl xs:text-xl text-lg md:mt-10 sm:mt-7 xs:mt-4 mt-3">Our Latest Blogs</div>
                <div className="text-center text-gray-500 font-sans md:text-xl sm:text-lg text-base mt-1 mb-3">See how you can up your career status</div>
                <BlogBody />
            </div>
            <div className="relative">
                <LastBody/>  
            </div>
            
            
            
        </div>


        
    </>
}