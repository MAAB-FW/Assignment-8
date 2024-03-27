// import { useEffect, useState } from "react"
// import useBooksData from "../../Hooks/useBooksData"
// import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import { useOutletContext } from "react-router-dom"
import ListedBooksSingleCard from "../../components/ListedBooksSingleCard/ListedBooksSingleCard"
// import { getFromLS } from "../../utils/localStorage"

const NestedWishlist = () => {
    const { shortedWishList } = useOutletContext()
    // const { data, loading } = useBooksData()
    // console.log(data)
    // const [listedData, setListedData] = useState([])
    // const localData = getFromLS("wish")

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
    if (shortedWishList.length < 1) {
        return (
            <div className="flex flex-col gap-5 items-center justify-center h-96">
                <p className="text-error text-3xl">Oops!!!</p>
                <p className="font-semibold text-xl">Wishlist are empty</p>
            </div>
        )
    }
    return (
        <div className="mt-8 mb-32 flex flex-col gap-6">
            {shortedWishList.map((book) => (
                <ListedBooksSingleCard key={book.bookId} book={book}></ListedBooksSingleCard>
            ))}
        </div>
    )
}

export default NestedWishlist
