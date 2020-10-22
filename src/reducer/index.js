import {combineReducers} from "redux"

import productReducers from "./productReducer"
import cartReducers from "./cartReducer"
import addressReducers from "./addresReducer"

const allReducers = combineReducers({
    productReducers,
    cartReducers,
    addressReducers
})

export default allReducers