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

import {addToCart} from "../../action"

const Body = ({showBody}) => {
    const [selected, setSelected] = React.useState(false)

    const dispatch = useDispatch()
    const {product,cart,total} = useSelector((state)=>{
        return{
            product: state.productReducers.product,
            cart: state.cartReducers.cart,
            total: state.cartReducers.total
        }
    })

    const renderCard = ()=>{
        return product.map((item,index)=>{
            return(
                <Card key={index}>
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
                            <BtnAdd onClick={()=> handleCart(item)}>ADD<AddIcon/></BtnAdd>
                        </BottomWrapper>
                    </CardContent>
                </Card>
            )
        })
    }

    const handleCart = (item) =>{
        let body = {
            name: item.name,
        }
        let tempCart = [...cart]
        let totalCart = total + item.price

        tempCart.push(body)
        let data = {
            body: tempCart,
            total: totalCart
        }
        dispatch(addToCart(data))
        
    }
    // console.log("globalstore : ", product, cart, total)
    return (
     <BodyContainer show={showBody? true : false}>
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
