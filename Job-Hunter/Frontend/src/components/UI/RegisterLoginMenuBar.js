import { Link } from "react-router-dom";

export default function RegisterLoginMenuBar() {
    return <>
        <div className='ml-auto flex gap-x-6'>
            <Link to={'/register'} className='bg-0D47A1 px-5 py-2 text-white rounded-md font-bold md:text-lg sm:text-base text-sm'>Register</Link>
            <Link to={'/login'} className='bg-white px-5 py-2 text-0D47A1 rounded-md border-2 border-0D47A1 font-bold md:text-lg sm:text-base text-sm'>Login</Link>
        </div>
    </>
}