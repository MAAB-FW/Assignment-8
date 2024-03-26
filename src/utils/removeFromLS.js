import { getFromLS } from "./getFromLS"

export const removeFromLs = (id, where) => {
    const localData = getFromLS(where)
    localStorage.removeItem(where, localData)
}
