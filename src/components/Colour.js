import React from "react";

function Colour({ background1, background2, background3, background4 , text1, text2, text3, text4 }) {

    return (

        <div class="colour-container">

            <div class="colour">

                <div class="hex" style={{backgroundColor: background1}}>
                </div>
                <h3 style={{margin: "0px"}}> Background</h3>
                <p style={{margin: "0px"}}> {text1}</p>

            </div>

            <div class="colour">

                <div class="hex" style={{backgroundColor: background2}}>
                </div>
                <h3 style={{margin: "0px"}}> Text </h3>
                <p style={{margin: "0px"}}> {text2}</p>

            </div>

            <div class="colour">

                <div class="hex" style={{backgroundColor: background3}}>
                </div>
                <h3 style={{margin: "0px"}}> Borders</h3>
                <p style={{margin: "0px"}}> {text3}</p>

            </div>

            <div class="colour">

                <div class="hex" style={{backgroundColor: background4}}>
                </div>
                <h3 style={{margin: "0px"}}> Secondary </h3>
                <p style={{margin: "0px"}}> {text4}</p>

            </div>

        </div>

    )
}


export default Colour