import { IoStarOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom"

const SingleBookCard = () => {
    return (
        <NavLink className="flex flex-col jb rounded-2xl p-6 bg-base-100 border ">
            <div className="">
                <img
                    className="rounded-2xl "
                    src="https://img.freepik.com/premium-vector/modern-business-brochure-template_71228-348.jpg?w=740"
                    alt=""
                />
            </div>
            <div className="mt-6">
                <div className="flex gap-3">
                    <h3 className="rounded-full px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">Young Adult</h3>
                    <h3 className="rounded-full px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">Identity</h3>
                </div>
                <div>
                    <h2 className="my-4 font-bold text-2xl text-[#131313]">The Catcher in the Rye</h2>
                    <p className="font-medium text-[#131313CC] ">By : Awlad Hossain</p>
                </div>
                <hr className="border-dashed my-5" />
                <div className="flex items-center justify-between font-medium text-[#131313CC]">
                    <p>Fiction</p>
                    <div className="flex items-center gap-3">
                        <p>5.00</p>
                        <IoStarOutline />
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default SingleBookCard
