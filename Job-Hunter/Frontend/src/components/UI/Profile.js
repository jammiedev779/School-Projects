import { Link, Navigate } from "react-router-dom";

export default function Profile(props) {
    return <Link className="cursor-pointer">
        <div className={`rounded-full overflow-hidden w-${props.w} h-${props.h}`}>
            <img className={`w-${props.w}`} src={props.src} alt={props.alt} onClick={props.onclick}/>
        </div>
    </Link>
}