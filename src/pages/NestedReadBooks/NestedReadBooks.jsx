import { useEffect, useState } from "react"
import ListedBooksSingleCard from "../../components/ListedBooksSingleCard/ListedBooksSingleCard"
import useBooksData from "../../Hooks/useBooksData"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import { getFromLS } from "../../utils/getFromLS"

const NestedReadBooks = () => {
    const { data, loading } = useBooksData()
    const localData = getFromLS("read")

    const [listedData, setListedData] = useState([])

    // useEffect(() => {
    //     if (data) {
    //         for (const id of localData) {
    //             const filterData = data.find((book) => book.bookId == id)
    //             if (filterData) {
    //                 setListedData([...listedData, filterData])
    //             }
    //         }
    //     }
    // }, [data, listedData, localData])
    console.log(localData)

    if (!localData) {
        return <div>no data</div>
    }

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="mt-8 mb-32 flex flex-col gap-6">
            {localData.map((book) => (
                <ListedBooksSingleCard key={book.bookId} book={book}></ListedBooksSingleCard>
            ))}
        </div>
    )
}

export default NestedReadBooks
