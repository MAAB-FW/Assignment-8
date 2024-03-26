export const getFromLS = (where) => {
    const localData = localStorage.getItem(where)
    return JSON.parse(localData)
}
