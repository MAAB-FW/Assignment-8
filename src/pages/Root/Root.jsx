import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import { Toaster } from "react-hot-toast"

const Root = () => {
    return (
        <div className="lg:max-w-[1440px] mx-auto">
            <div className="w-[90%] lg:w-[81.25%] mx-auto">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Toaster></Toaster>
        </div>
    )
}
export default Root
