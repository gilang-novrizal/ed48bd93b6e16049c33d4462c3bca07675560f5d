import {combineReducers} from "redux"

import productReducers from "./productReducer"
import cartReducers from "./cartReducer"

const allReducers = combineReducers({
    productReducers,
    cartReducers
})

export default allReducers