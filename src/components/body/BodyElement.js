import styled from "styled-components"
import {MdStar, MdStarHalf, MdAdd, MdFiberManualRecord} from "react-icons/md"

export const BodyContainer = styled.div`
    display: ${({show})=>(show? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    overflow-y: scroll;
    z-index: 1;
`
export const BtnContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const BtnLunch = styled.button`
    border: none;
    outline: none;
    width: 100%;
    padding: 8px;
    background: ${({active})=> (active? '#424749' : "#fff" )};;
    color: ${({active})=>(active? "#fff" : "#6e7679")};;
    border-radius: 4px 0 0 4px;
    border: 1px solid #6e7679;
    
`
export const BtnDinner = styled.button`
    border: none;
    outline: none;
    padding: 8px;
    width: 100%;
    background: ${({active})=> (active? '#424749' : "#fff" )};
    color: ${({active})=>(active? "#fff" : "#6e7679")};
    border-radius: 0 4px  4px 0;
    border: 1px solid #6e7679;
`

export const DateText = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #424749;
    align-self: flex-start;
    padding: 24px 0 12px;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 8px 10px 10px rgba(10,31,68,0.1);
    margin: 16px 0;
    border-radius: 8px;
    overflow: hidden;
   
`
export const CardImage = styled.img`
    width: 100%;
   
`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
`

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const RatingText = styled.p`
    font-size: 12px;
    color: #6e7679;
    margin-right: 8px;
`

export const StarWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const StarIcon = styled(MdStar)`
    font-size: 16px;
    color: #f9423a;
`
export const HalfStarIcon = styled(MdStarHalf)`
    font-size: 16px;
    color: #f9423a;    
`
export const ContentName = styled.p`
    font-size: 16px;
    color: #424749;
    font-weight: 700;
    margin: 8px 0;
`
export const ContentSub = styled.p`
    font-size: 12px;
    color: #6e7679;
    display: flex;
    align-items: center;
`
export const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
`
export const BtnAdd = styled.button`
    padding: 8px 16px;
    background: #f9423a;
    color: #fff;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 6px;
`
export const AddIcon = styled(MdAdd)`
    font-size: 16px;
    color: #fff;
`
export const Dot = styled(MdFiberManualRecord)`
    font-size: 5px;
    margin: 0 3px;
`