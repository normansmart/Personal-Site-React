import React from "react";

//PAGE COMPONENT IMPORTS
import ProjectSummaryChart from "../components/ProjectSummaryChart";
import HowItWorks from "../CSS/components/regimen/HowItWorks";
import InfoBlockLeft from "../components/InfoBlockLeft";
import InfoBlockRight from "../components/InfoBlockRight";
import Typography from "../components/Typography";
import Colour from "../components/Colour";
import "../CSS/proc.css"

//IMAGE IMPORTS
import banner from "../images/proc/banner.png"
import tracker1 from "../images/proc/tracker1.png"
import infoimage1 from "../images/proc/point1.png"
import infoimage2 from "../images/proc/point2.png"
import infoimage3 from "../images/proc/point3.png"
import infoimage4 from "../images/proc/point4.png"
import infoimage5 from "../images/proc/point5.png"
import solution from "../images/proc/solution.png"
import infoimage6 from "../images/proc/goal.png"
import infoimage7 from "../images/proc/infographic.png"
import infoimage8 from "../images/proc/team-work.png"
import infoimage9 from "../images/proc/simple.png"
import regimen from "../images/proc/regimen.png"
import dragonball from "../images/proc/dragonball.png"
import hanafuda from "../images/proc/hanafuda.png"
import digital from "../images/proc/digital.png"
import century from "../images/proc/21century.png"
import howitworks1 from "../images/proc/howto1.png"
import howitworks2 from "../images/proc/howto2.png"
import howitworks3 from "../images/proc/howto3.png"
import howitworks4 from "../images/proc/howto4.png"
import howitworks5 from "../images/proc/howto5.png"
import colourline from "../images/proc/palecolour.png"
const Regimen = ({ }) => {

    return (
        <div className="page-wrapper" style={{backgroundColor: "#FFFBF6" , color: "#38383A" ,  fontFamily: "Mulish"}}>

            <div class="banner-container">
                <img src={banner} />
            </div>

            <div class="container">

                <div class="overview">
                    <img class="tracker-container" src={tracker1} />

                    <h2> BACKGROUND </h2>
                    <p> I originally made this concept with the purpose of tracking my diet and exercising habits. But as
                        the pandemic began I revamped it to help better my overall productivity.</p>
                </div>

                <ProjectSummaryChart tool1={"Figma | Illustrator"} tool2={"Adobe Photoshop"} tool3={"Visual Studio Code"}
                    date={"March 2021"} dateTotal={"3 Weeks"}
                    repositoryName={"No repository for this project"}
                    prototypeLink={"https://www.figma.com/proto/uhGnxlu1LQXsKa3XY7BIPo/proc?page-id=0%3A1&node-id=987%3A249&viewport=2575%2C-3243%2C0.24268659949302673&scaling=scale-down&starting-point-node-id=987%3A249&show-proto-sidebar=1"
                    } buttonColour={"#8DAC8B"} color={"#38383A"}  buttonTextColor={"#FFFBF6"}/>


                <main>

                    <section id="section-2">
                        <div class="section-container">
                            <h2 style={{color: "#C18888"}}>  —— UNDERSTANDING THE PROBLEM  </h2>
                            <h3> One step forward, two steps sideways.</h3>
                            <p> As working from home became the new norm it became difficult to separate specific
                                responsibilities or tasks on account of proximity. It’s hard to take care of siblings and
                                work at the same time. And even harder to segment the work across the day with other tasks
                                or circumstances.
                            </p>

                            <p>
                                For the past year, I made use of a number of productivity apps to help keep track of my day
                                but some proved counterproductive. Brainstorming on the advantages and disadvantages I faced
                                using these products, I began iterating on this concept and set ground rules.
                            </p>

                            <InfoBlockLeft text={"There is no one size fits all tool"} image={infoimage1} />
                            <InfoBlockRight text={"Not everyone is a digital person"} image={infoimage2} />
                            <InfoBlockLeft text={"The phone itself can be a distraction"} image={infoimage3} />
                            <InfoBlockRight text={"The value of work cannot be measured"} image={infoimage4} />
                            <InfoBlockLeft text={"No one likes being bombardent with ads"} image={infoimage5} />

                            <h2> SOLUTION</h2>

                            <div class="research-stats" style={{maarginTop: "0px"}}>

                                <div class="point" style={{margin: "0px"}}>
                                    <h1>
                                        REGIMEN
                                    </h1>

                                    <p> Users can keep track of their tasks throughout the day and measures only their
                                        consistency. </p>
                                </div>

                                <div class="pointimage">
                                    <img src={solution} />
                                </div>

                            </div>

                        </div>
                    </section>

                    <section id="section-6">

                        <div class="section-container">

                            <h2 style={{color: "#88C19F"}}>—— IDEATION </h2>

                            <h3> Not another productivity app.</h3>

                            <p> I wasn’t looking to reinvent the wheel but to make it easier to change my tires.
                            </p>

                            <p> There’s no app that can improve one's productivity, especially considering the solution may
                                not be digital at all, like having a calendar and marking tasks with a pen. With this in
                                mind, I set standards to frame the project journey.
                            </p>

                            <div class="rules-container">

                                <div class="rule">
                                    <img src={infoimage6} />

                                    <h2 class="rule-name"> Anything is a task.</h2>

                                </div>


                                <div class="rule">
                                    <img src={infoimage7} />
                                    <h2 class="rule-name">Inform, don't
                                        hassle. </h2>
                                </div>



                                <div class="rule">

                                    <img src={infoimage8} />
                                    <h2 class="rule-name">Fluid transissioning</h2>

                                </div>

                                <div class="rule">
                                    <img src={infoimage9} />
                                    <h2 class="rule-name"> Simple not
                                        minimalist.</h2>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section id="section-5">
                        <div class="section-container">
                            <h2 style={{ color: "#889FC1" }} > —— DESIGN </h2>

                            <p>
                                I wanted to give off the feeling of using paper so I chose an off white colour as the light
                                theme background.
                            </p>

                            <div class="colourtypo-container">
                                <h3> TYPOGRAPHY </h3>

                                <Typography fontName={"Mulish"} />

                                <Colour
                                    background1={"#FFFBF6"}
                                    background2={"#38383A"}
                                    background3={"#7F6A42"}
                                    background4={"#2D3950"}
                                    text1={"#FFFBF6"}
                                    text2={"#38383A"}
                                    text3={"#7F6A42"}
                                    text4={"#2D3950"} />
                            </div>

                            <h3 style={{ margin: "20px" }} > Custom colour picker </h3>
                            <img style={{ width: "100%" }} src={colourline} />
                            <h3 style={{ margin: "20px", marginTop: "50px" }}> Logo & Timer faces </h3>

                            <div class="logo-container">

                                <div class="logo-image">
                                    <img class="logo" src={regimen} />
                                    <p> REGIMEN </p>
                                </div>

                                <div class="logo-image">
                                    <img class="logo" src={hanafuda} />
                                    <p> HANAFUDA</p>
                                </div>

                                <div class="logo-image">
                                    <img class="logo" src={dragonball} />
                                    <p> DRAGONBALL</p>
                                </div>

                                <div class="logo-image">
                                    <img class="logo" src={digital} />
                                    <p> DIGITAL</p>
                                </div>

                                <div class="logo-image">
                                    <img class="logo" src={century} />
                                    <p> 21st CENTURY</p>
                                </div>
                            </div>

                        </div>
                    </section>



                    <section id="section-7">
                        <div class="section-container">
                            <h2 style={{ color: "#C188BB" }}> —— HOW IT WORKS </h2>

                            <HowItWorks title={"1. Choose timer face"} description={"Choose from a list of simple or animated time swatches that can be viewed from the lock screen."} image={howitworks1} />
                            <HowItWorks title={"2) Set parameters"} description={"Set a name, time and days to tasks and view them and their consistency score on the home screen."} image={howitworks2} />
                            <HowItWorks title={"3) Start or Pass"} description={"Slide each task to the left or right to start or pass them respectively."} image={howitworks3} />
                            <HowItWorks title={"4) Relax & Focus"} description={"Timers animate over the duration of the task. Notes can be updated overtime."}image={howitworks4} />
                            <HowItWorks title={"5) Check your stats"} description={"I utilized a coloured dot map, similar to that of Github so that users can tell at a glance their consistency in monthly intervals."} image={howitworks5} />

                        </div>
                    </section>
                </main>
            </div>

        </div>
    )

}

export default Regimen