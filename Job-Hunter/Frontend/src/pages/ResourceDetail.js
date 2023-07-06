
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import { useNavigate} from "react-router-dom";
import parse from 'html-react-parser'

export default function ResourceDetail() {

    const navigate = useNavigate();

    const {tags} = useStateContext();

    const temBlogJSON = localStorage.getItem('tempBlog');
    const temBlog = JSON.parse(temBlogJSON);

    const changeToFormatDate = (blogDate) => {
        const date = new Date(blogDate);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    return <>
        <div className="pt-24">
            <div className=" w-full bg-one lg:h-36 md:h-28 h-20 flex items-center justify-between px-10 mb-3">
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">Resource & Blog</h1>
            </div>
            

            <div className="pt-4 pl-7">
                <button className='text-black hover:text-one text-lg' onClick={() =>{localStorage.removeItem('temBlog'); navigate(-1)}}><ArrowBackIcon/> Back</button>
            </div>


            <div className="mx-auto flex xs:flex-col-reverse lg:flex-row flex-wrap py-6 px-12">
                <section className="w-full lg:w-2/3 flex flex-col  px-3 gap-5">
                    <img className='w-full' src={`http://localhost:8000/images/blogs/${temBlog.image}`} alt="" />
                    <h1 className='text-5xl text-bold'>{temBlog.title}</h1>
                    <p href="#" className="text-sm">
                        By <b>{temBlog.author}</b>, Published on <b>{changeToFormatDate(temBlog.created_at)}</b> 
                    </p>
                    <p className='text-lg'>
                       {parse(temBlog.article)}
                    </p>
                    
                    <div>
                        <hr class="h-px my-5 bg-gray-200 border-0"/>
                        <button type="button" class="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-one hover:text-white hover:bg-one hover:border-one focus:outline-none focus:ring-2 focus:ring-one focus:ring-offset-2 transition-all text-sm  ">
                            {temBlog.category}
                        </button>
                    </div>


                    
                    
                </section>


                
                {/* <!-- Sidebar Section --> */}
                <aside className="w-full lg:w-1/3 flex flex-col items-center px-3">
                    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                        <div className="w-full mt-2 mb-5">
                            <form className="w-full bg-white border-one border-1 flex items-center justify-between px-4 py-2 rounded-md text-blue-300" action="">
                            <div>
                                <i className="uil uil-search"></i>
                                <input className="bg-transparent outline-none ml-2 py-2 w-full placeholder-gray-300" type="search " name="" placeholder="Search by keyword" />
                            </div>
                            <button type="submit" className="inline-block px-3 py-2 bg-one  rounded-md cursor-pointer transition-all duration-300 ease-in-out text-white">Go</button>
                            </form>
                        </div>
                        
                        <p className="text-2xl text-one font-semibold mb-4">Category</p>
                        <ul className="w-full flex lg:flex-col xs:flex-row md:flex-row flex-wrap gap-2">
                            {
                                tags.map(tag =>(
                                <Link className="py-1 px-3 text-lg bg-gray-100 hover:bg-gray-200 hover:text-one rounded-md cursor-pointer">{tag.tag}</Link>

                                ))
                            }

                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    </>
}