import React from "react";

function SocialButton({image , colour  }){



return(
    <div style={{backgroundColor: colour , borderRadius: "100%" , width: "40px" , height: "40px" , display: "flex" , justifyContent: "center" , alignItems: "center" , marginRight: "20px"}}>
   <img src={image} />
    </div>
)

}

export default SocialButton