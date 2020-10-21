import styled from "styled-components"

export const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 16px;
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