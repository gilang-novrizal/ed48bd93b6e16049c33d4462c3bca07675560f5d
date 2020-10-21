const INITIAL_STATE = {
    cart: []
}

const cartReducers = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case "ADDTOCART":
            return {cart: action.payload}
        default:
            return state
    }
}

export default cartReducers