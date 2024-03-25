import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"

const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="w-[81.25%] mx-auto">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Root
