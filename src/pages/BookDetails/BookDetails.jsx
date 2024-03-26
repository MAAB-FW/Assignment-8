import { useParams } from "react-router-dom"
import useBooksData from "../../Hooks/useBooksData"

const BookDetails = () => {
    const { bookId } = useParams()
    const { data, loading } = useBooksData()
    console.log(data)
    return (
        <div className="mb-32 flex gap-12">
            <div className="bg-[#1313130D] rounded-2xl max-w-[573px] flex items-center">
                <img
                    className="w-[425px] lg:h-[564px]"
                    src="https://img.freepik.com/premium-vector/modern-business-brochure-template_71228-348.jpg?w=740"
                    alt=""
                />
            </div>
            <div className="max-w-[549px]">
                <div className="pb-[22px] border-b">
                    <h2 className="text-[40px] font-bold text-[#131313] mb-5">The Catcher in the Rye</h2>
                    <p className="text-xl font-medium text-[#131313CC] ">By : Awlad Hossain</p>
                </div>
                <p className="py-3 text-xl font-medium text-[#131313CC] border-b">Fiction</p>
                <div>
                    <p className="mt-6">
                        <span className="font-bold">Review :</span> A book review may be a primary source, an opinion piece, a
                        summary review, or a scholarly view. Books can be reviewed for printed periodicals, magazines, and
                        newspapers, as school work, or for book websites on the Internet. A book review&apos;s length may vary
                        from a single paragraph to a substantial essay. Such a review may evaluate the book based on personal
                        taste
                    </p>
                </div>
                <div className="mt-6 py-6 border-b flex items-center gap-4">
                    <h3 className="font-bold">Tag</h3>
                    <h3 className="rounded-full px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">Young Adult</h3>
                    <h3 className="rounded-full px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">Identity</h3>
                </div>
                <div className="mt-6 mb-8">
                    <table className="text-[#131313] ">
                        <tbody>
                            <tr>
                                <td className="text-[#131313B3]">Number of Pages:</td>
                                <td className="w-[59px]"></td>
                                <td className="font-semibold">281</td>
                            </tr>
                            <tr>
                                <td className="text-[#131313B3]">Publisher:</td>
                                <td className="w-[59px]"></td>
                                <td className="font-semibold">J.B Lippincott & Co.</td>
                            </tr>
                            <tr>
                                <td className="text-[#131313B3]">Year of Publishing:</td>
                                <td className="w-[59px]"></td>
                                <td className="font-semibold">1960</td>
                            </tr>
                            <tr>
                                <td className="text-[#131313B3]">Rating:</td>
                                <td className="w-[59px]"></td>
                                <td className="font-semibold">4.8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-4 *:rounded-lg *:px-7 *:py-[18px] *:font-semibold *:text-lg">
                    <button className="border border-[#1313134D]">Read</button>
                    <button className="bg-[#50B1C9] text-white">Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default BookDetails
