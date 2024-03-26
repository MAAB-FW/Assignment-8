import useBooksData from "../../Hooks/useBooksData"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import SingleBookCard from "../SingleBookCard/SingleBookCard"

const AllBooks = () => {
    const { data, loading } = useBooksData()
    // console.log(data)
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
            {/* all books */}
            {data.map((book) => (
                <SingleBookCard key={book.bookId} book={book}></SingleBookCard>
            ))}
        </div>
    )
}

export default AllBooks
