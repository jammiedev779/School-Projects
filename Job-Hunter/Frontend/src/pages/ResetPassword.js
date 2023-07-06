
import ResetPasswordForm from "../components/Login/ResetPasswordForm";

export default function Resetpassword() {
    return <main className="absolute w-full h-full bg-white z-20 pt-3">
            {/* <Link to={'..'} className="bg-one font-semibold  text-white md:px-6 sm:px-4 xs:px-3 px-2 md:text-base sm:text-sm text-xs  py-1 rounded-lg ml-3 fixed z-20 ">Back</Link> */}
            <div className="absolute w-full h-full p-3 rounded-3xl">
                <ResetPasswordForm/>
            </div>          
        </main>
}