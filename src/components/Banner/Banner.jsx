import { NavLink } from "react-router-dom"

const Banner = () => {
    return (
        <div className="bg-[#1313130D] lg:h-[554px] rounded-3xl flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-[86px]">
            <div className="flex mb-9 lg:mb-0 mt-8 lg:mt-0 flex-col lg:gap-12 items-center lg:items-start text-center lg:text-left justify-center">
                <h2 className="font-bold text-[25px] lg:text-[56px] w-[90%] lg:w-[526px] text-[#131313]">
                    Books to freshen up your bookshelf
                </h2>
                <NavLink to={"/listed-books"} className="btn bg-[#23BE0A] text-white">
                    View The List
                </NavLink>
            </div>
            <div className="mt-8 lg:mt-0">
                <img
                    className="lg:w-[318px] w-36 h-40 lg:h-[394px] bg-[#1313130D] object-contain shadow-xl"
                    src="https://blog-cdn.reedsy.com/directories/gallery/166/large_2f9efcc5c6b1207ccf5aa5b1e448530f.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Banner
