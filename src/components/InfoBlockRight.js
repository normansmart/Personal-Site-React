import React from "react";

function InfoBlockRight({ text, image }) {
    return (

        <div class="infoblock">

            <div class="info-image">
                <img src={image} />
            </div>

            <div class="info-text">
                <h1> {text} </h1>
            </div>

        </div>

    )
}

export default InfoBlockRight