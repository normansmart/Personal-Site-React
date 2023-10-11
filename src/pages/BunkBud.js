import React from "react";

//PAGE COMPONENT IMPORTS
import ProjectSummaryChart from "../components/ProjectSummaryChart";
import InfoBlockLeft from "../components/InfoBlockLeft";
import Typography from "../components/Typography";
import Colour from "../components/Colour";
import "../CSS/proc.css"

//IMAGE IMPORTS
import banner from "../images/bunkbud/bunkbud banner.png"
import infoimage1 from "../images/bunkbud/safety.png"
import infoimage2 from "../images/bunkbud/compatibility.png"
import infoimage3 from "../images/bunkbud/maintenance.png"
import infoimage4 from "../images/bunkbud/responsibility.png"
import solution from "../images/bunkbud/display-image-1.png"
import prioritysheet from "../images/bunkbud/PRIORITY SHEET.png"
import userflow from "../images/bunkbud/userflow.png"
import wireframes from "../images/bunkbud/screens.png"


const BunkBud = ({ }) => {

    return (
        <div className="page-wrapper" style={{ backgroundColor: "#ffffff", color: "#333a40", fontFamily: "Raleway" }}>

            <div class="banner-container">
                <img src={banner} />
            </div>

            <div class="container">

                <div class="overview">

                    <h2> BACKGROUND </h2>
                    <p> When dorming in college, myself and my roommates bickered quite a bit over how to manage our
                        responsibilities to our shared living space. I had the benefit of being good friends with all of
                        them but that didn’t stop us from having serious problems as roommates.
                    </p>

                    <p> I had seen and heard many different complaints and critiques from others about their rooming
                        experience and sought to figure a way to address this.
                    </p>
                </div>

                <ProjectSummaryChart tool1={"Adobe XD"} tool2={"Illustrator"} tool3={"Photoshop"}
                    date={"Sept 2019"} dateTotal={"3 Weeks"}
                    prototypeLink={"https://www.figma.com/proto/uhGnxlu1LQXsKa3XY7BIPo/proc?page-id=0%3A1&node-id=987%3A249&viewport=2575%2C-3243%2C0.24268659949302673&scaling=scale-down&starting-point-node-id=987%3A249&show-proto-sidebar=1"
                    } buttonColour={"#8DAC8B"} />

                <main>

                    <section id="section-2" style={{ backgroundColor: "#ffffff" }}>
                        <div class="section-container">
                            <h2> Making Small Talk </h2>

                            <p>I spoke to various different types of people. Their sub-backgrounds came in a variety of
                                cultures and experiences and I sorted them into groups by their age, gender, occupation and distance to work relative to their home or where they would prefer to live within the tri-state area.
                            </p>
                            <p>
                                I interviewed 10 people who were in need of a living partner. Additionally, I took surveys
                                of 15 more people within the younger criteria groups on their interests and pain points of
                                living with people or looking for roommates.
                            </p>


                            <img style={{width: "100%"}} src={solution} />
                        </div>
                    </section>

                    <section id="section-6" style={{ backgroundColor: "#e5f0e3" }}>

                        <div class="section-container">

                            <h2>IDEATION </h2>

                            <p> I created an empathy map to gain a more precise perspective on the users needs. Many of the
                                participants detailed more requirements out of concerns. They valued
                            </p>

                            <InfoBlockLeft text={"Finding listing/users that are verified by trusted sources"} image={infoimage1} />

                            <InfoBlockLeft text={"Knowing the type of person you'll live with"} image={infoimage2} />

                            <InfoBlockLeft text={"Keeping better track of shared living spaces"} image={infoimage3} />

                            <InfoBlockLeft text={"Keeping track of ownership duties such as; rent payments"} image={infoimage4} />

                            <h3> Priority Sheet & User Flow </h3>
                            <img style={{width: "100%"}} src={prioritysheet} />
                       <br></br>
                            <img  style={{width: "100%"}}src={userflow} />
                        </div>
                    </section>

                    <section id="section-5" style={{ backgroundColor: "#F1DDC5" }}>
                        <div class="section-container">
                            <h2> DESIGN </h2>

                            <div class="colourtypo-container">
                                <h3> TYPOGRAPHY </h3>

                                <Typography fontName={"Raleway"} />

                                <Colour
                                    background1={"#FFFFFF"}
                                    background2={"#707070"}
                                    background3={"#89C981"}
                                    background4={"#D7903F"}
                                    text1={"#FFFFFF"}
                                    text2={"#707070"}
                                    text3={"#89C981"}
                                    text4={"#D7903F"} />
                            </div>

                        </div>
                    </section>



                    <section id="section-7" >
                        <div class="section-container">
                            <h2> WIREFRAMES </h2>
                            <img style={{width: "100%"}} src={wireframes} />
                        </div>
                    </section>
                </main>
            </div>

        </div>
    )

}

export default BunkBud