import styled from "styled-components"
import {MdArrowBack,MdKeyboardArrowDown} from "react-icons/md"

export const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 1;
`
export const AddressContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 8px;
`

export const ArrowLeft = styled(MdArrowBack)`
    font-size: 20px;
    margin: 8px;
    margin-right: 0;
`

export const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
`

export const AddressTitle = styled.p`
    font-size: 8px;
    color: #6e7679;
    text-transform: uppercase;
`
export const AddressTextWrapper = styled.div`
    display: flex;
`
export const AddressText = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #424749;
    display: flex;
    align-items: center;
`
export const ArrowDown = styled(MdKeyboardArrowDown)`
    color: #f9423a;
    font-size: 20px;
`
export const DateContainer = styled.div`
    display: flex;
    overflow-y: scroll;
    border-bottom: 1px solid #f1f1f2;
`
export const DateButton = styled.button`
    padding: 12px;
    border: none;
    outline: none;
    display: flex;
    background: #fff;
    flex-direction: column;
    margin: 0 8px;
    color: '#424749';

    &:focus{
        background: #424749;
        border-radius: 50%;
        color: #fff
    }

`
export const BtnText1 = styled.p`
    font-size: 8px;
`
export const BtnText2 = styled.p`
    font-size: 12px;
    font-weight: 700;
`