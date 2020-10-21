import React from 'react'
import {BodyContainer, BtnContainer, BtnDinner, BtnLunch} from './BodyElement'

const Body = () => {
    const [selected, setSelected] = React.useState(false)
    return (
    
     <BodyContainer>
         <BtnContainer>
             <BtnLunch active={selected} onClick={()=> setSelected(!selected)}>Lunch</BtnLunch>
             <BtnDinner active={!selected} onClick={()=> setSelected(!selected)}>Dinner</BtnDinner>
         </BtnContainer>
     </BodyContainer>
    )
}

export default Body
