import { useParams } from "react-router-dom"
import useBooksData from "../../Hooks/useBooksData"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import { useEffect, useState } from "react"
// import { getFromLS } from "../../utils/localStorage"
// import { saveToLS } from "../../utils/saveToLS"
// import { removeFromLs } from "../../utils/removeFromLS"
import { saveToLS } from "../../utils/localStorage"

const BookDetails = () => {
    const { id } = useParams()
    const { data, loading } = useBooksData()
    // console.log(id, data)
    const [oneData, setOneData] = useState({})

    useEffect(() => {
        const oneBook = data?.find((book) => book.bookId === +id)
        setOneData(oneBook)
    }, [data, id])
    // console.log(oneData);
    const { bookName, author, image, tags, rating, category, totalPages, publisher, yearOfPublishing, review } = oneData || {}

    // const [readBooks, setReadBooks] = useState([])
    // const [wishlistBooks, setWishlistBooks] = useState([])

    // const lWishData = getFromLS("wishlist")
    // const lReadData = getFromLS("read")
    // const [existWish, setExistWish] = useState(false)
    // const [existRead, setExistRead] = useState(false)
    // console.log(lWishData, lReadData)
    // const wishExist = lWishData.find((data) => data == bookId)
    // const readExist = lReadData.find((data) => data == bookId)
    // console.log(wishExist);
    // const [wishlist, setWishlist] = useState(getFromLS("wish"))
    // const [readList, setReadList] = useState(getFromLS("read"))
    // console.log("wishlist", wishlist, getFromLS("wish"))
    // console.log("readList", readList)
    // let wLExist = wishlist?.find((wl) => wl.bookId == bookId)
    // let rLExist = readList?.find((rl) => rl.bookId == bookId)
    // console.log(wishlist[0].bookId, bookId)
    // console.log(existWish, existRead)
    const handleWishlist = () => {
        // if (existWish == false && existRead == false) {
        saveToLS(oneData, "wish")
        //     const localWish = getFromLS("wish")
        //     const isExistWish = localWish.find((w) => w.bookId == bookId)
        //     if (isExistWish == true) {
        //         setExistWish(true)
        //     }
        // }
        // const isExist = wishlist.find((w) => w.bookId == bookId)
        // if (!isExist) {
        //     setWishlist(...wishlist, oneData)
        // }

        // if (wishExist || readExist) {
        //     toast.error("Can't add to wishlist")
        // } else {
        //     saveToLS(bookId, "wishlist")
        //     toast.success("Successfully add to Wishlist")
        // }
    }
    const handleRead = () => {
        saveToLS(oneData, "read")
        // const localRead = getFromLS("read")
        // const isExistRead = localRead.find((w) => w.bookId == bookId)
        // if (isExistRead == true) {
        // removeFromLs(oneData,"wish")
        //     setExistWish(true)
        //     setExistRead(true)
        // }

        // const isExist = readList.find((r) => r.bookId == bookId)
        // if (!isExist) {
        //     setReadList(...readList, oneData)
        // }

        // if (wishExist) {
        //     removeFromLs(bookId, "wishlist")
        // }
        // if (!readExist) {
        //     saveToLS(bookId, "read")
        //     toast.success("Successfully add to Read List")
        // } else {
        //     toast.error("Can't add twice")
        // }
    }
    // console.log("read:", readBooks, "wish:", wishlistBooks)

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="mb-32 flex flex-col lg:flex-row gap-12">
            <div className="bg-[#1313130D] rounded-2xl w-full flex justify-center items-center">
                <img className="w-[80%] lg:w-[425px] rounded-2xl lg:h-[564px] shadow-sm" src={image} alt="" />
            </div>
            <div className="max-w-[549px]">
                <div className="pb-3 lg:pb-[22px] border-b">
                    <h2 className="text-[25px] lg:text-[40px] font-bold text-[#131313] lg:mb-5">{bookName}</h2>
                    <p className=" lg:text-xl font-medium  text-[#131313CC] ">By : {author}</p>
                </div>
                <p className="py-2 lg:py-3 lg:text-xl font-medium text-[#131313CC] border-b">{category}</p>
                <div>
                    <p className="mt-6">
                        <span className="font-bold">Review :</span> {review}
                    </p>
                </div>
                <div className="mt-3 lg:mt-6 py-3 lg:py-6 border-b flex items-center gap-4">
                    <h3 className="font-bold">Tag</h3>
                    {tags?.map((tag, idx) => (
                        <h3
                            key={idx}
                            className="rounded-full text-sm lg:text-base px-2 lg:px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">
                            {tag}
                        </h3>
                    ))}
                </div>
                <div className="mt-3 lg:mt-6 mb-8">
                    <table className="text-[#131313] *:text-sm *:lg:text-base">
                        <tbody>
                            <tr>
                                <td className="text-[#131313B3]">Number of Pages:</td>
                                <td className="w-[59px]"></td>
                                <td className="font-semibold">{totalPages}</td>
                            </tr>
                            <tr>
                                <td className="text-[#131313B3]">Publisher:</td>
                                <td className="w-[59px]"></td>
                                <td className="font-semibold">{publisher}</td>
                            </tr>
                            <tr>
                                <td className="text-[#131313B3]">Year of Publishing:</td>
                                <td className="w-[59px]"></td>
                                <td className="font-semibold">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="text-[#131313B3]">Rating:</td>
                                <td className="w-[59px]"></td>
                                <td className="font-semibold">{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-4 *:rounded-lg *:px-4 *:lg:px-7 *:py-3 *:lg:py-[18px] *:font-semibold *:text-lg">
                    <button onClick={handleRead} className="border border-[#1313134D]">
                        Read
                    </button>
                    <button onClick={handleWishlist} className="bg-[#50B1C9] text-white">
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
        // <div className="mb-32 flex gap-12">
        //     <div className="bg-[#1313130D] rounded-2xl max-w-[573px] flex items-center">
        //         <img
        //             className="w-[425px] lg:h-[564px]"
        //             src="https://img.freepik.com/premium-vector/modern-business-brochure-template_71228-348.jpg?w=740"
        //             alt=""
        //         />
        //     </div>
        //     <div className="max-w-[549px]">
        //         <div className="pb-[22px] border-b">
        //             <h2 className="text-[40px] font-bold text-[#131313] mb-5">The Catcher in the Rye</h2>
        //             <p className="text-xl font-medium text-[#131313CC] ">By : Awlad Hossain</p>
        //         </div>
        //         <p className="py-3 text-xl font-medium text-[#131313CC] border-b">Fiction</p>
        //         <div>
        //             <p className="mt-6">
        //                 <span className="font-bold">Review :</span> A book review may be a primary source, an opinion piece, a
        //                 summary review, or a scholarly view. Books can be reviewed for printed periodicals, magazines, and
        //                 newspapers, as school work, or for book websites on the Internet. A book review&apos;s length may vary
        //                 from a single paragraph to a substantial essay. Such a review may evaluate the book based on personal
        //                 taste
        //             </p>
        //         </div>
        //         <div className="mt-6 py-6 border-b flex items-center gap-4">
        //             <h3 className="font-bold">Tag</h3>
        //             <h3 className="rounded-full px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">Young Adult</h3>
        //             <h3 className="rounded-full px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">Identity</h3>
        //         </div>
        //         <div className="mt-6 mb-8">
        //             <table className="text-[#131313] ">
        //                 <tbody>
        //                     <tr>
        //                         <td className="text-[#131313B3]">Number of Pages:</td>
        //                         <td className="w-[59px]"></td>
        //                         <td className="font-semibold">281</td>
        //                     </tr>
        //                     <tr>
        //                         <td className="text-[#131313B3]">Publisher:</td>
        //                         <td className="w-[59px]"></td>
        //                         <td className="font-semibold">J.B Lippincott & Co.</td>
        //                     </tr>
        //                     <tr>
        //                         <td className="text-[#131313B3]">Year of Publishing:</td>
        //                         <td className="w-[59px]"></td>
        //                         <td className="font-semibold">1960</td>
        //                     </tr>
        //                     <tr>
        //                         <td className="text-[#131313B3]">Rating:</td>
        //                         <td className="w-[59px]"></td>
        //                         <td className="font-semibold">4.8</td>
        //                     </tr>
        //                 </tbody>
        //             </table>
        //         </div>
        //         <div className="flex gap-4 *:rounded-lg *:px-7 *:py-[18px] *:font-semibold *:text-lg">
        //             <button className="border border-[#1313134D]">Read</button>
        //             <button className="bg-[#50B1C9] text-white">Wishlist</button>
        //         </div>
        //     </div>
        // </div>
    )
}

export default BookDetails
