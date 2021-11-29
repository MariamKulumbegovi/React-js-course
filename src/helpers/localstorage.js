export const SaveItem=(key,value)=>{
    return localStorage.setItem(key, JSON.stringify(value))
}
export const GetItem=(key)=>{
    return JSON.parse(localStorage.getItem(key))
}
export const RemoveItem=(key)=>{
    return localStorage.removeItem(key)
}
export const ItemExists=(key)=>{
    return !!GetItem(key)
}