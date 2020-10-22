import React from 'react'
import {BtnContainer, BtnLunch, BtnDinner} from "./ButtonElement"
const ButtonCont = () => {
    const [selected, setSelected] = React.useState(false)

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("container").style.top = "100px";
    } else {
        document.getElementById("container").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
    }
    
    return (
        <BtnContainer id="container">
             <BtnLunch active={selected} onClick={()=> setSelected(!selected)}>Lunch</BtnLunch>
             <BtnDinner active={!selected} onClick={()=> setSelected(!selected)}>Dinner</BtnDinner>
         </BtnContainer>
    )
}

export default ButtonCont
