import styled from "styled-components"
import {MdClose, MdPlace} from "react-icons/md"

export const ModalContainer = styled.div`
    height: 100vh;
    background: rgba(0,0,0,0.3);
    display: ${({show})=> (show? 'flex' : 'none')};
    flex-direction: column;
    justify-content: flex-end;
    z-index: 100;
    position: absolute;
    top: 0;

`

export const ModalCard = styled.div`
    background: #fff;
    border-radius: 8px 8px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    text-align: right;
    min-height: 87%;
`

export const BtnClose = styled(MdClose)`
    font-size: 24px;
    color: #424749;
    align-self: flex-end;
`

export const TitleText = styled.p`
    margin-top: 16px;
    font-size: 20px;
    color: #424749;
    font-weight: 700;
    text-align: left;
    line-height: 1.2;
    width: 75%;
    align-self: flex-start;
`
export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const InputIcon = styled(MdPlace)`
    color: #f9423a;
    font-size: 20px;
    position: absolute;
    left: 24px;
`
export const TextInput = styled.input`
    border-radius: 4px;
    padding: 12px;
    width: 100%;
    border: 2px solid #f1f1f2;
    margin: 8px 0;
    outline: none;
    padding-left: 40px;
`

export const Picker = styled.ul`
    display: ${({show})=>(show? 'flex':'none')};
    flex-direction: column;
    width: 100%;
`
export const AddressWrapper = styled.li`
    display: flex;
    align-items: center;
`

export const PickerWrapper = styled.div`
    background: #e2e4e4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    width: 25px;
    height: 25px;
    justify-content: center;
`
export const PickerIcon = styled(MdPlace)`
    color: #6e7679;
    font-size: 20px;
`
export const PickerTextWrapper = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f1f1f2;
`
export const PickerTextTitle = styled.p`
    font-size: 14px;
    color: #424749;
    text-align: left;
    line-height: 2;
    font-weight: 700;
`

export const PickerTextDetail = styled.p`
    font-size: 12px;
    color: #6e7679;
`
export const BottomImage = styled.img`
    position: absolute;
    bottom: 0;
    height: 15px;
    margin-bottom: 10px;
`