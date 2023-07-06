import { Form, Link } from 'react-router-dom'
import ImageHeader from '../../Image/ImageHeader.png'
import SearchIcon from '@mui/icons-material/Search';
export default function Header() {

    return <>
        <div className='pt-24 flex sm:h-full items-center'>
            <div className='absolute  w-1/2 flex flex-col ml-12 lg:gap-y-12 mn:gap-y-10 md:gap-y-8 sm:gap-y-6 xs:gap-y-4 gap-y-4'>
                <div className='flex flex-col lg:gap-y-6 mn:gap-y-5 md:gap-y-4 sm:gap-y-3 gap-y-2'>
                    <label className='text-white 2xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-xs text-min font-medium '>Find Jobs, Employment & Career Opportunities</label>
                    <label className='text-white lg:text-6xl mn:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Find Your Next<br />Dream Job</label>
                </div>
                <Link to={'/BrowseJob'} className='flex flex-row-reverse gap-4  bg-one w-max rounded-full px-4 justify-center py-1 items-center text-white font-semibold hover:bg-blue-700'>
                    <SearchIcon className='text-white' style={{ fontSize: 30 }} />
                    <span className='w-max lg:h-9 mn:h-8 md:h-7 sm:h-8 h-6  ml-1 outline-none rounded-r-full flex items-center lg:text-base sm:text-sm text-xs' type='search' placeholder='Search Job Here'>Browe Jobs</span>
                   
                </Link>
            </div>
            <img src={ImageHeader} className='w-full sm:h-auto h-52' alt=''/>
        </div>
    </>
}