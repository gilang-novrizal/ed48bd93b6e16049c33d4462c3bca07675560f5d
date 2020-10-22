import React from 'react'
import {useSelector} from 'react-redux'
import { AddressWrapper, BottomImage, BtnClose, InputIcon, InputWrapper, ModalCard, ModalContainer, Picker, PickerIcon, PickerTextDetail, PickerTextTitle, PickerTextWrapper, PickerWrapper, TextInput, TitleText } from './ModalElement'

const Modal = ({showModal, onClose}) => {
    const [inputAddress, setInputAddress] = React.useState('')
    const {address} = useSelector((state)=>{
        return{
            address: state.addressReducers.address
        }
    })

    const renderAddress = ()=>{
        return address.map((item,index)=>{
            return(
                <AddressWrapper key={index}>
                    <PickerWrapper>
                        <PickerIcon/>
                    </PickerWrapper>
                    <PickerTextWrapper>
                        <PickerTextTitle>{item.name}</PickerTextTitle>
                        <PickerTextDetail>{item.detail}</PickerTextDetail>
                    </PickerTextWrapper>
                </AddressWrapper>
            )
        })
    }
   
    return (
        <ModalContainer show={showModal? true : false}>
            <ModalCard>
                <BtnClose onClick={onClose}/>
                <TitleText>Cek makanan yang tersedia di lokasi kamu!</TitleText>
                <InputWrapper>
                    <InputIcon/>
                    <TextInput onChange={(input)=>setInputAddress(input.target.value)}/>
                </InputWrapper>
                
                   
                <Picker show={inputAddress.length > 3? true : false}>
                    {renderAddress()}
                </Picker>
                <BottomImage src={require('../../images/Powered_by_google.png')}/>
            </ModalCard>
        </ModalContainer>
    )
}

export default Modal
