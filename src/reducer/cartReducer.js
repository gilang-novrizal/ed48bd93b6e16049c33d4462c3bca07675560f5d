const INITIAL_STATE = {
    cart: [],
    total: 0
}

const cartReducers = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case "ADDTOCART":
            return {...state,
                cart: action.payload.body,
                total: action.payload.total
                }
        default:
            return state
    }
}

export default cartReducers