import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"

const Root = () => {
    return (
        <div className="lg:max-w-[1440px] mx-auto">
            <div className="lg:w-[81.25%] mx-auto">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Root
