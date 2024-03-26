import { useEffect, useState } from "react"
import ListedBooksSingleCard from "../../components/ListedBooksSingleCard/ListedBooksSingleCard"
import useBooksData from "../../Hooks/useBooksData"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

const NestedReadBooks = () => {
    const { data, loading } = useBooksData()
    // console.log(data)
    const [listedData, setListedData] = useState([])
    useEffect(() => {
        const filterData = data?.filter((book) => book.bookId == "4")
        if (filterData) {
            setListedData(filterData)
        }
    }, [data])
    // console.log(listedData)
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="mt-8 mb-32 flex flex-col gap-6">
            {listedData.map((book) => (
                <ListedBooksSingleCard key={book.bookId} book={book}></ListedBooksSingleCard>
            ))}
        </div>
    )
}

export default NestedReadBooks
