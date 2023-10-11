import React from "react";

function HowItWorks({title , description , image}){

    return(
        <div class="research-stats">

        <div class="point">
            <h1 style={{ margin: "0px" }}>
                 {title}
            </h1>

            <p> {description} </p>
        </div>

        <div class="pointimage">
            <img src={image} />
        </div>

    </div>
    )
}

export default HowItWorks