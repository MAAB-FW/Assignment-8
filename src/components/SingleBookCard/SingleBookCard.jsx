import { IoStarOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const SingleBookCard = ({ book }) => {
    const { bookId, bookName, author, image, tags, rating, category } = book || {}

    return (
        <Link to={`/book-details/${bookId}`} className="flex flex-col rounded-2xl p-6 bg-base-100 border ">
            <div className="">
                <img className="rounded-2xl w-[326px] h-[430px] object-center shadow-lg" src={image} alt="" />
            </div>
            <div className="mt-6">
                <div className="flex gap-3">
                    {tags?.map((tag, idx) => (
                        <h3 key={idx} className="rounded-full px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">
                            {tag}
                        </h3>
                    ))}
                </div>
                <div>
                    <h2 className="my-4 font-bold text-2xl text-[#131313]">{bookName}</h2>
                    <p className="font-medium text-[#131313CC] ">By : {author}</p>
                </div>
                <hr className="border-dashed my-5" />
                <div className="flex items-center justify-between font-medium text-[#131313CC]">
                    <p>{category}</p>
                    <div className="flex items-center gap-3">
                        <p>{rating}</p>
                        <IoStarOutline />
                    </div>
                </div>
            </div>
        </Link>
    )
}

SingleBookCard.propTypes = {
    book: PropTypes.object,
}

export default SingleBookCard
