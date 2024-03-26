export const getFromLS = (where) => {
    const localData = localStorage.getItem(where)
    if (localData) {
        return JSON.parse(localData)
    }
    return []
}
