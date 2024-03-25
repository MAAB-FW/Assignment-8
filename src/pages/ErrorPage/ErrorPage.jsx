import { NavLink } from "react-router-dom"

const ErrorPage = () => {
    
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-screen ">
            <p className="text-error text-6xl">Oops!!!</p>
            <p className="">Page not Found</p>
            <NavLink to={-1} className="btn btn-outline">
                Go Back
            </NavLink>
        </div>
    )
}

export default ErrorPage
