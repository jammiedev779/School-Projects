import { Outlet } from "react-router-dom"; 
import MenuBar from '../components/MenuBar'
import Footer from "../components/Footer";


export default function Root() {

    return <div className="">
        <header className="w-full relative">
            <MenuBar />
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>

    </div>
}
