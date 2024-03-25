import { Outlet } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div className="text-3xl text-red animate-pulse text-center justify-center flex items-center h-screen">Salamun Alaikum</div>
            <Outlet></Outlet>
        </div>
    )
}

export default Home
