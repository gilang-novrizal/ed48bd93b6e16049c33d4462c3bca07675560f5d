import styled from 'styled-components'
export const BtnContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    position: sticky;
    position: -webkit-sticky;
    top: 100px;
    padding: 8px 16px;
    background: #fff;
    transition: 0.2s all ease-in-out;
`

export const BtnLunch = styled.button`
    border: none;
    outline: none;
    width: 100%;
    padding: 8px;
    background: ${({active})=> (active? '#424749' : "#fff" )};;
    color: ${({active})=>(active? "#fff" : "rgba(16, 16, 16, 0.3)")};;
    border-radius: 4px 0 0 4px;
    border: ${({active})=>(active? 'none' : '1px solid rgba(16, 16, 16, 0.3)')};
    
`
export const BtnDinner = styled.button`
    border: none;
    outline: none;
    padding: 8px;
    width: 100%;
    background: ${({active})=> (active? '#424749' : "#fff" )};
    color: ${({active})=>(active? "#fff" : "rgba(16, 16, 16, 0.3)")};
    border-radius: 0 4px  4px 0;
    border: ${({active})=>(active? 'none' : '1px solid rgba(16, 16, 16, 0.3)')};
`
