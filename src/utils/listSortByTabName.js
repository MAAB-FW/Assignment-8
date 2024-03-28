import { getFromLS } from "./localStorage"

export const listSortByTabName = (tabName, shorter) => {
    const mainData = getFromLS(tabName)
    const shortData = mainData.sort((a, b) => {
        if (shorter === "rating") {
            return b.rating - a.rating
        } else if (shorter === "numOfPages") {
            return b.totalPages - a.totalPages
        } else if (shorter === "publisherYear") {
            return b.yearOfPublishing - a.yearOfPublishing
        }
    })
    return shortData
}
