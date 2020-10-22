import React from 'react'
import {useSelector} from "react-redux"
import {
    CartContainer, 
    CartWrapper, 
    CartIcon, 
    RightIcon, 
    LeftCart, 
    RightCart,
    TopText,
    BottomText
} from "./CartElement"

const Cart = () => {
    const {cart,total} = useSelector((state)=>{
        return{
            cart: state.cartReducers.cart,
            total: state.cartReducers.total
        }
    })
    return (
        <CartContainer show={cart.length > 0? true : false}>
            <CartWrapper>
                <LeftCart>
                    <TopText>{cart.length} items | Rp {total.toLocaleString()}</TopText>
                    <BottomText>Termasuk ongkos kirim</BottomText>
                </LeftCart>
                <RightCart>
                    <CartIcon/>
                    <RightIcon/>
                </RightCart>
            </CartWrapper>
        </CartContainer>

    )
}

export default Cart
