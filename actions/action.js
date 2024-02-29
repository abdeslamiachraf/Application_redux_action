export const setLivres = (data)=>{
    return {
        type:"SET_LIVRES",
        payload:data
    }
}
export const addPanier = (data)=>{
    return {
        type:"ADD_PANIER",
        payload:data
    }
}
export const remPanier = (ISBN)=>{
    return {
        type:"REM_PANIER",
        payload:ISBN
    }
}