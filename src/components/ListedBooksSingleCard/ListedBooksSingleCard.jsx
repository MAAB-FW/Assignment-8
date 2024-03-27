import { RiGroupLine } from "react-icons/ri"
import { RiPagesLine } from "react-icons/ri"
import { SlLocationPin } from "react-icons/sl"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const ListedBooksSingleCard = ({ book }) => {
    // console.log(data)

    const { bookId, bookName, author, image, tags, rating, category, totalPages, publisher, yearOfPublishing } = book || {}

    return (
        <div className="flex flex-col lg:flex-row rounded-2xl gap-6 p-6 bg-base-100 border">
            <div className="bg-[#1313130D] rounded-2xl flex items-center justify-center">
                <img className="rounded-2xl size-44 lg:size-[230px] object-contain" src={image} alt="" />
            </div>
            <div className="w-full">
                <div className="">
                    <div className="mb-2 *:lg:mb-4">
                        <h2 className=" font-bold text-xl lg:text-2xl text-[#131313]">{bookName}</h2>
                        <p className="font-medium text-[#131313CC] ">By : {author}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 items-center mb-4">
                        <h3 className="font-bold">Tag</h3>
                        {tags?.map((tag, idx) => (
                            <h3
                                key={idx}
                                className="rounded-full text-sm lg:text-base px-2 lg:px-4 py-1 lg:py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">
                                {tag}
                            </h3>
                        ))}
                        <div className="flex items-center gap-2 text-[#131313CC]">
                            <SlLocationPin />
                            <p>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-5 items-center font-medium text-[#13131399]">
                        <div className="flex items-center gap-2">
                            <RiGroupLine />
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiPagesLine />
                            <p>Page {totalPages}</p>
                        </div>
                    </div>
                    <hr className="border my-4 w-full" />
                    <div className="flex flex-wrap gap-3 *:rounded-full *:px-5 *:py-3 *:font-medium">
                        <h3 className="bg-[#328EFF26] text-[#328EFF]">Category: {category}</h3>
                        <h3 className="bg-[#FFAC3326] text-[#FFAC33]">Rating: {rating}</h3>
                        <Link to={`/book-details/${bookId}`} className="bg-[#23BE0A] text-white">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

ListedBooksSingleCard.propTypes = {
    book: PropTypes.object,
}

export default ListedBooksSingleCard
