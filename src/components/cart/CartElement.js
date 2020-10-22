import styled from "styled-components"
import {MdShoppingCart, MdKeyboardArrowRight} from "react-icons/md"

export const CartContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0),#ffffff);  
    z-index: 10;
    padding: 16px;
    display: ${({show})=>(show? "block" : "none")};
    transition: all 1s ease-in-out;
`

export const CartWrapper = styled.div`
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    background: #a23530;
`
export const LeftCart = styled.div`
    display: flex;
    flex-direction: column;
`
export const RightCart = styled.div`
    display: flex;
`
export const CartIcon = styled(MdShoppingCart)`
    color: #fff;
    font-size: 24px;
`
export const RightIcon = styled(MdKeyboardArrowRight)`
    color: #fff;
    font-size: 24px;
`

export const TopText = styled.p`
    color: #fff;
    font-size: 14px;
    font-weight: 700;
`
export const BottomText = styled.p`
    color: #fff;
    font-size: 12px;
`
