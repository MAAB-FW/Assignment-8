import { RiGroupLine } from "react-icons/ri"
import { RiPagesLine } from "react-icons/ri"
import { SlLocationPin } from "react-icons/sl"
import { Link } from "react-router-dom"

const ListedBooksSingleCard = ({ book }) => {
    // console.log(data)

    const { bookId, bookName, author, image, tags, rating, category, totalPages, publisher, yearOfPublishing } = book || {}

    return (
        <div className="flex rounded-2xl gap-6 p-6 bg-base-100 border ">
            <div className="bg-[#1313130D] rounded-2xl flex items-center">
                <img className="rounded-2xl size-[230px] object-contain" src={image} alt="" />
            </div>
            <div className="w-full">
                <div className="">
                    <div className="*:mb-4">
                        <h2 className=" font-bold text-2xl text-[#131313]">{bookName}</h2>
                        <p className="font-medium text-[#131313CC] ">By : {author}</p>
                    </div>
                    <div className="flex gap-3 items-center mb-4">
                        <h3 className="font-bold">Tag</h3>
                        {tags?.map((tag, idx) => (
                            <h3 key={idx} className="rounded-full px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">
                                {tag}
                            </h3>
                        ))}
                        <div className="flex items-center gap-2 text-[#131313CC]">
                            <SlLocationPin />
                            <p>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center font-medium text-[#13131399]">
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
                    <div className="flex gap-3">
                        <h3 className="rounded-full px-5 py-3 bg-[#328EFF26] text-[#328EFF] font-medium">Category: {category}</h3>
                        <h3 className="rounded-full px-5 py-3 bg-[#FFAC3326] text-[#FFAC33] font-medium">Rating: {rating}</h3>
                        <Link
                            to={`/book-details/${bookId}`}
                            className="rounded-full px-5 py-3 bg-[#23BE0A] text-white font-medium">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListedBooksSingleCard
