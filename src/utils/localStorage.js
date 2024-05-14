import toast from "react-hot-toast"
export const getFromLS = (where) => {
    let books = []
    const localData = localStorage.getItem(where)
    if (localData) {
        books = JSON.parse(localData)
    }
    return books
}

// export const removeFromLs = (book, where) => {
//     const books = getFromLS(where)
//     const index = books.indexOf(book)
//     if (index !== -1) {
//         books.splice(index, 1)
//     }
//     saveToLS(books, where)
// }

export const saveToLS = (book, where) => {
    const books = getFromLS(where)
    if (where == "wish") {
        const readBooks = getFromLS("read")
        const isReadExist = readBooks.find((b) => b.bookId == book.bookId)
        if (isReadExist) {
            return toast.error("Can't add read book to wishlist")
        }
        const isExist = books.find((b) => b.bookId == book.bookId)
        if (isExist) {
            return toast.error("Can't add same book to wishlist")
        } else {
            books.push(book)
            localStorage.setItem(where, JSON.stringify(books))
            return toast.success("Successfully add to Wishlist")
        }
    }
    const isExist = books.find((b) => b.bookId == book.bookId)
    if (isExist) {
        return toast.error("Can't add same book to Read list")
    }
    const wishBooks = getFromLS("wish")
    const isWishExist = wishBooks.find((b) => b.bookId == book.bookId)
    if (isWishExist) {
        const removeExist = wishBooks.filter((wb) => wb.bookId != book.bookId)
        localStorage.setItem("wish", JSON.stringify(removeExist))
    }
    books.push(book)
    localStorage.setItem(where, JSON.stringify(books))
    return toast.success("Successfully add to Read list")
}
