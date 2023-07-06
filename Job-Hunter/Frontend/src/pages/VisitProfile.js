import VisitPosted from "../components/VisitProfile/VisitPosted";
import VisitUserInfo from "../components/VisitProfile/VisitUserInfo";



export default function VisitProfile() {
    return <div className="bg-blue-50 w-full px-3 flex md:flex-row flex-col gap-x-5">
        <div className="md:w-96 w-full">
            <VisitUserInfo/>
        </div>

        <div className="w-full">
            <div className='md:pt-28 pt-0'>

            </div>
            <div className="bg-white mb-4">
                <VisitPosted/>
            </div>

        </div>
    </div>
}