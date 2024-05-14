import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 p-0 my-12">
            {/* small */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 *:my-1 *:text-lg *:text-[#131313CC]">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "font-semibold border-[#23BE0A] border text-[#23BE0A]" : ""
                                }
                                to={"/"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "font-semibold border-[#23BE0A] border text-[#23BE0A]" : ""
                                }
                                to={"/listed-books/read-books"}>
                                Listed Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "font-semibold border-[#23BE0A] border text-[#23BE0A]" : ""
                                }
                                to={"/pages-to-read"}>
                                Pages to Read
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "font-semibold border-[#23BE0A] border text-[#23BE0A]" : ""
                                }
                                to={"/contact-us"}>
                                Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "font-semibold border-[#23BE0A] border text-[#23BE0A]" : ""
                                }
                                to={"/about"}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost lg:text-[28px] text-[#131313] p-0 px-2">
                    Book Vibe
                </Link>
            </div>
            {/* large */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 *:mx-1 *:text-lg *:text-[#131313CC]">
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "font-semibold border-[#23BE0A] border text-[#23BE0A]" : "")}
                            to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "font-semibold border-[#23BE0A] border text-[#23BE0A]" : "")}
                            to={"/listed-books/read-books"}>
                            Listed Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "font-semibold border-[#23BE0A] border text-[#23BE0A]" : "")}
                            to={"/pages-to-read"}>
                            Pages to Read
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "font-semibold border-[#23BE0A] border text-[#23BE0A]" : "")}
                            to={"/contact-us"}>
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "font-semibold border-[#23BE0A] border text-[#23BE0A]" : "")}
                            to={"/about"}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end *:mx-2">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    )
}

export default NavBar
