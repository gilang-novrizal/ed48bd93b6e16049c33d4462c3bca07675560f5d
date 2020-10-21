import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {
    BodyContainer, 
    BtnContainer, 
    BtnDinner, 
    BtnLunch,
    Card,
    CardImage,
    DateText,
    RatingWrapper,
    RatingText,
    StarWrapper,
    StarIcon,
    HalfStarIcon,
    CardContent,
    ContentName,
    BottomWrapper,
    ContentSub,
    BtnAdd,
    AddIcon,
    Dot
} from './BodyElement'
import {MdFiberManualRecord} from "react-icons/md"

import {addToCart} from "../../action"

const Body = () => {
    const [selected, setSelected] = React.useState(false)

    const {product,cart} = useSelector((state)=>{
        return{
            product: state.productReducers.product,
            cart: state.cartReducers.cart
        }
    })

    const renderCard = ()=>{
        return product.map((item,index)=>{
            return(
                <Card>
                    <CardImage src={item.image}/>
                    <CardContent>
                        <RatingWrapper>
                            <RatingText>{item.rating}</RatingText>
                            <StarWrapper>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <HalfStarIcon/>
                            </StarWrapper>
                        </RatingWrapper>
                        <ContentName>{item.name}</ContentName>
                        <ContentSub>by {item.resto} <Dot/> {item.location}</ContentSub>
                        <BottomWrapper>
                            <ContentName>Rp {item.price.toLocaleString()}</ContentName>
                            <BtnAdd>ADD<AddIcon/></BtnAdd>
                        </BottomWrapper>
                    </CardContent>
                </Card>
            )
        })
    }

    console.log("globalstore : ", product, cart)
    return (
     <BodyContainer>
         <BtnContainer>
             <BtnLunch active={selected} onClick={()=> setSelected(!selected)}>Lunch</BtnLunch>
             <BtnDinner active={!selected} onClick={()=> setSelected(!selected)}>Dinner</BtnDinner>
         </BtnContainer>
         
         <DateText>Rabu, 20 Oktober 2020</DateText>
         {renderCard()}
     </BodyContainer>
    )
}

export default Body
