import React from "react";

function Typography ({fontName}){

    return(
        <div class="typo-container" style={{ fontFamily: fontName }} >

        <h1 style={{ fontSize: "80px", margin: "0px", marginBottom: "20px" }} > Aa </h1>

        <h2> {fontName} </h2>

        <p style={{ fontWeight: "800" }} >The quick brown fox jumped over the lazy
            dog.</p>

        <p style={{ fontWeight: "700" }}>The quick brown fox jumped over the lazy
            dog.</p>

        <p style={{ fontWeight: "600" }}>The quick brown fox jumped over the lazy
            dog.</p>

        <p style={{ fontWeight: "500" }}>The quick brown fox jumped over the lazy
            dog.</p>

        <p style={{ fontWeight: "400" }}>The quick brown fox jumped over the lazy
            dog.</p>

    </div>

    )
}


export default Typography