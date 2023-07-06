import { useState, useEffect,useRef } from "react";
import axiosClient from "../axios-client";
import { Link, useNavigate } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useStateContext } from "../context/ContextProvider";
import parse from 'html-react-parser'
import { Pagination, Slide } from "@mui/material";
import { Skeleton } from "@mui/material";
export default function Resource() {
  const [sliceData, setSliceData] = useState([]);
  const [data, setData] = useState([]);
  const {blogs, setBlogs,tags,setTags} = useStateContext();
  const [blogV2,setBlogsV2] = useState([]);
  const pageNum = 1//number of card in one slice
  const inputRef = useRef(null);

  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if(Object.keys(blogs).length == 0){

      axiosClient.get("/blog")
      .then(({data}) => {
        setBlogs(data.blogs);
        setBlogsV2(data.blogs);
        //setData(data.blog)
        setLoading(false);
      })
    }else {
      setBlogsV2(blogs);
      //setData(blogs)
      setLoading(false)
    }
    
    axiosClient.get("/tags")
    .then(data => {
      setTags(data.data);
    })

  }, []);


  const changeToFormatDate = (blogDate) => {
    const date = new Date(blogDate);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  
  const saveToLocalStorage = (blog) => {
        const temBlogJSON = JSON.stringify(blog);
        localStorage.setItem('tempBlog', temBlogJSON);
  }

  const handleSearch = (event) =>{
    event.preventDefault(); 
    const keyword = inputRef.current.value;
    if(keyword == null){
      setBlogsV2(blogs);
    }else{
    
      setBlogsV2(blogs.filter(blog => blog.title.toLowerCase().includes(keyword)));
      setSliceData(blogV2.slice(0, pageNum));
      console.log(sliceData)
    }    
  }

  const handleTag = (event) =>{
    let tag = event.target.value;
    if(tag.length === 0){
      setBlogsV2(blogs);
    }else{
      setBlogsV2(blogs.filter(blog => blog.tag_id ==  parseInt(tag)))
    }

  }

  const handleDataAfterSearch = (event) =>{
    let data = event.target.value;
    if(data.length === 0){
      setBlogsV2(blogs);
    }
  
  }
    useEffect(() => { 
      console.clear();
      console.log(blogV2)
      if(blogV2.length > 0){
        setSliceData(blogV2.slice(0, pageNum));
      }
      //setSliceData(blogV2.slice(0, pageNum));
      setData(blogV2)
    }, [blogV2])
    const dataHandler = (data) => {
        setSliceData(data);
    }
    const sliceHandler = (num) => {
        setSliceData(data.slice(pageNum * (num - 1), pageNum *num))
    }

  // if(loading){
  //   return <div></div>
  // }
  return <> 
    <div className="pt-24">
      
      <div className=" w-full bg-one lg:h-36 md:h-28 h-20 flex items-center justify-between px-10">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">Resource & Blog</h1>
      </div>
      {loading?
      <div className="px-32 py-4 grid grid-cols-12 gap-x-4 mt-6">
          <div className="col-span-9 flex flex-col gap-y-7">
              {Array.from({length:pageNum},(_,index)=><Skeleton key={index} variant="rounded"  height={window.innerHeight*0.9} />)}
          </div>
          <div className="col-span-3">
          <Skeleton variant="rounded"  height={window.innerHeight*0.70} />
          </div>
        
      </div>:
        <div className="mx-16 flex xs:flex-col-reverse lg:flex-row flex-wrap py-10 px-14">

        {/* <!-- Posts Section --> */}
        <section className="w-full lg:w-2/3 flex flex-col items-center px-3">
          {blogV2 && sliceData.map(blog => {
             return <article onClick={() => {saveToLocalStorage(blog); navigate(`/resource/details/${blog.id}`)}} className="flex flex-col shadow my-4">
             {/* <!-- Article Image --> */}
             <Link href="#" className="hover:opacity-75">
                 <img src={`http://localhost:8000/images/blogs/${blog.image}`}/>
             </Link>
             <div className="bg-white flex flex-col justify-start p-6 ">
                 <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">{blog.category}</a>
                 <a href="#" className="text-3xl font-bold hover:text-one pb-4">{blog.title}</a>
                 <p href="#" className="text-sm pb-3">
                     By <b>{blog.author}</b>, Published on <b>{changeToFormatDate(blog.created_at)}</b> 
                 </p>
                 <p className="pb-6 xs:line-clamp-2 md:line-clamp-3 ">{parse(blog.article)}</p>
                 <a href="#" className="uppercase text-gray-800 hover:text-one pt-2">Continue Reading <i className="fas fa-arrow-right"></i></a>
             </div>
           </article>
          })
          }
          
          

          {/* <!-- Pagination --> */}
          <div className="flex items-center py-8">
              <Pagination count={Number.parseFloat(data.length / pageNum) > Number.parseInt(data.length / pageNum) ? Number.parseInt(data.length / pageNum) + 1 : Number.parseInt(data.length / pageNum)} variant="outlined" color="primary" shape="rounded" onChange={(e, pageNumber) => {
                        console.log(pageNumber)
                        sliceHandler(pageNumber)
                    }} />
          </div>

        </section>

        {/* <!-- Sidebar Section --> */}
        <aside className="w-full lg:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <div className="w-full mt-2 mb-5">
                  <form className="w-full bg-white border-one border-1 flex items-center justify-between px-4 py-2 rounded-md text-blue-300" action="">
                  <div>
                      <i className="uil uil-search"></i>
                      <input className="bg-transparent outline-none ml-2 py-2 w-full placeholder-gray-300" type="text" name="" placeholder="Search by keyword" ref={inputRef} onKeyUp={handleDataAfterSearch}/>
                  </div>
                      <button className="inline-block px-3 py-2 bg-one  rounded-md cursor-pointer transition-all duration-300 ease-in-out text-white" onClick={handleSearch}>GO</button>
                  </form>
              </div>
              
              <p className="text-2xl text-one font-semibold mb-4">Category</p>
              <ul className="w-full flex lg:flex-col xs:flex-row md:flex-row flex-wrap gap-2">
              {
                tags.map(tag =>(
                  <button value={tag.id} className="py-1 px-3 text-lg bg-gray-100 hover:bg-gray-200 hover:text-one rounded-md cursor-pointer" onClick={handleTag}>{tag.tag}</button>

                ))
              }

              </ul>
          </div>
        </aside>

      </div>
    }
    </div>
            
  </>
}