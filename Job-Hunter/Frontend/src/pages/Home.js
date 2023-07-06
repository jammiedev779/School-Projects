import axiosClient from "../axios-client";
import Body from "../components/Home/Body";

import Header from "../components/Home/Header";

export default function Home() {

    
    return <div className=""> 
        <header>
            <Header />
        </header>
        <main>
            <Body/>
        </main>
        
    </div>
}   