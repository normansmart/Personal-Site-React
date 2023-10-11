import React from "react";

function SocialButton({image}){



return(
    <div style={{  width: "40px" , height: "40px" , display: "flex" , justifyContent: "center" , alignItems: "center" , marginRight: "20px"}}>
   <img src={image} />
    </div>
)

}

export default SocialButton