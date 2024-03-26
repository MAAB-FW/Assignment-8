import { getFromLS } from "./getFromLS"

export const saveToLS = (id, where) => {
    const localData = getFromLS(where) || []
    localData.push(id)
    localStorage.setItem(where, JSON.stringify(localData))
}
