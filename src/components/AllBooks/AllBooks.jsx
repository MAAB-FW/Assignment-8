import SingleBookCard from "../SingleBookCard/SingleBookCard"

const AllBooks = () => {
    return (
        <div className=" mt-[100px]">
            <h2 className="text-[40px] font-bold text-center mb-10 text-[#131313]">Books</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
                {/* all books */}
                <SingleBookCard></SingleBookCard>
                <SingleBookCard></SingleBookCard>
                <SingleBookCard></SingleBookCard>
                <SingleBookCard></SingleBookCard>
                <SingleBookCard></SingleBookCard>
                <SingleBookCard></SingleBookCard>
            </div>
        </div>
    )
}

export default AllBooks
