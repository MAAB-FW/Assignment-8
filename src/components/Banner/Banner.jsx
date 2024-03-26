import { NavLink } from "react-router-dom"

const Banner = () => {
    return (
        <div className="bg-[#1313130D] lg:h-[554px] rounded-3xl flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-[86px]">
            <div className="flex flex-col lg:gap-12 items-start justify-center">
                <h2 className="font-bold lg:text-[56px] lg:w-[526px] text-[#131313]">Books to freshen up your bookshelf</h2>
                <NavLink to={"/listed-books"} className="btn bg-[#23BE0A] text-white">
                    View The List
                </NavLink>
            </div>
            <div>
                <img
                    className="lg:w-[318px] w-36 h-40 lg:h-[394px]"
                    src="https://img.freepik.com/premium-vector/modern-business-brochure-template_71228-348.jpg?w=740"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Banner
