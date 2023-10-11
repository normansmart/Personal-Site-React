import React from "react";

function InfoBlockLeft({text , image}) {
    return (

        <div class="infoblock">

            <div class="info-text">
                <h1> {text} </h1>
            </div>

            <div class="info-image">
                <img src={image} />
            </div>

        </div>

    )
}

export default InfoBlockLeft