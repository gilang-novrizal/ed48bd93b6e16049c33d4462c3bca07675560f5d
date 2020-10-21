import React from 'react'
import {
    HeaderContainer,
    AddressContainer,
    ArrowDown,
    ArrowLeft,
    AddressText,
    AddressTitle,
    AddressWrapper,
    AddressTextWrapper,
    DateContainer,
    DateButton,
    BtnText1,
    BtnText2
} from "./HeaderElement"

const Header = () => {
    const dateArr = [
        {
            date: 11,
            day: "SEN"
        },
        {
            date: 12,
            day: "SEL"
        },
        {
            date: 13,
            day: "RAB"
        },
        {
            date: 14,
            day: "KAM"
        },
        {
            date: 15,
            day: "JUM"
        },
        {
            date: 16,
            day: "SAB"
        },
        {
            date: 17,
            day: "MIN"
        },
        {
            date: 18,
            day: "SEN"
        },
        {
            date: 19,
            day: "SEL"
        },
        {
            date: 20,
            day: "RAB"
        },
        {
            date: 21,
            day: "KAM"
        },
        {
            date: 22,
            day: "JUM"
        },
        {
            date: 23,
            day: "SAB"
        },
        {
            date: 24,
            day: "MIN"
        },
       
    ]

    const renderButton = ()=>{
        return dateArr.map((item,index)=>{
            return(
                <DateButton key={index} disabled={item.day == "SAB" || item.day == "MIN"? true : false}>
                    <BtnText1>{item.day}</BtnText1>
                    <BtnText2>{item.date}</BtnText2>
                </DateButton>
            )
        })
    }
    return (
        <HeaderContainer>
            <AddressContainer>
                <ArrowLeft/>
                <AddressWrapper>
                    <AddressTitle>Alamat Pengantaran</AddressTitle>
                    <AddressTextWrapper>
                        <AddressText>Tokopedia Tower</AddressText>
                        <ArrowDown/>
                    </AddressTextWrapper>
                </AddressWrapper>
            </AddressContainer>
            <DateContainer>
                {renderButton()}
            </DateContainer>

        </HeaderContainer>
    )
}

export default Header
