const init={panier:[],livres:[]}
export const reducer = (state=init, action)=>{
    switch(action.type){
        case "SET_LIVRES":
            return {...state, livres:action.payload}
            case "ADD_PANIER":
                return {...state, panier:[...state.panier,action.payload]}
                case "REM_PANIER":
                    return {...state, panier:[...state.panier.filter((item)=>item.ISBN != action.payload)]}
        default:
            return state
    }

}