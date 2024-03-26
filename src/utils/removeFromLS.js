import { getFromLS } from "./getFromLS"
import { saveToLS } from "./saveToLS"

export const removeFromLs = (id, where) => {
    const localData = getFromLS(where) || []
    const index = localData.indexOf(id)
    if (index !== -1) {
        localData.splice(index, 1)
    }
    saveToLS(localData, where)
}
