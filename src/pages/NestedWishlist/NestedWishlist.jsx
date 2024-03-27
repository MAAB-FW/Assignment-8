// import { useEffect, useState } from "react"
// import useBooksData from "../../Hooks/useBooksData"
// import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import ListedBooksSingleCard from "../../components/ListedBooksSingleCard/ListedBooksSingleCard"
import { getFromLS } from "../../utils/localStorage"

const NestedWishlist = () => {
    // const { data, loading } = useBooksData()
    // console.log(data)
    // const [listedData, setListedData] = useState([])
    const localData = getFromLS("read")
    // useEffect(() => {
    //     const filterData = data?.filter((book) => book.bookId == "4")
    //     if (filterData) {
    //         setListedData(filterData)
    //     }
    // }, [data])
    // console.log(listedData)
    // if (loading) {
    //     return <LoadingSpinner></LoadingSpinner>
    // }
    if (!localData) {
        return <div>no data</div>
    }
    return (
        <div className="mt-8 mb-32 flex flex-col gap-6">
            {localData.map((book) => (
                <ListedBooksSingleCard key={book.bookId} book={book}></ListedBooksSingleCard>
            ))}
        </div>
    )
}

export default NestedWishlist
