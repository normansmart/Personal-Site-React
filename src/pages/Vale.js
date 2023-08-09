import React from "react";
import "../CSS/vale.css"

const Vale = ({ }) => {
    const associations = require("../images/project-vale/associations.png")
    const colourscheme = require("../images/project-vale/colourscheme.png")
    return (
        < div className="page-wrapper">

            <div class="banner-container">
                <img src="" />
            </div>

            <div className="container">
                <main>
                    <section id="section-1">

                        <div class="section-container">
                            <div class="overview">
                                <img class="" src="" />

                                <h2> BACKGROUND </h2>
                                <p> Vale is a code sharing web app that lets users write, store and share code across various different languages allowing hobby or even professional developers to work together on small or large projects.
                                    This project serves as my capstone and final work during my apprenticeship at Flatiron School’s full-time software engineering bootcamp.
                                </p>

                            </div>
                        </div>

                        <div class="project-info-container">

                            <div class="project-info">

                                <div class="infobox">
                                    <h3> TOOLKIT </h3>
                                    <p class="infobox-info"><b> DESIGN:</b> Figma, Illustrator  </p>
                                    <p class="infobox-info"><b> BUILDING:</b> React.js, Ruby on Rails, Active Record SQL </p>
                                </div>

                                <div class="infobox">
                                    <h3> DURATION </h3>
                                    <p class="infobox-info"><b> FROM:</b> JUL 2022 - Present </p>
                                    <p class="infobox-info"> <b> STATUS:</b> Ongoing </p>
                                </div>

                                <div class="infobox">
                                    <h3> GITHUB </h3>
                                    <a href="https://www.figma.com/proto/uhGnxlu1LQXsKa3XY7BIPo/proc?page-id=0%3A1&node-id=987%3A249&viewport=2575%2C-3243%2C0.24268659949302673&scaling=scale-down&starting-point-node-id=987%3A249&show-proto-sidebar=1"
                                        target="_blank">
                                        <button class="prototype"> View prototype </button>
                                    </a>
                                </div>

                            </div>

                        </div>

                    </section>



                    <section id="section-2">

                        <div class="section-container">

                            <h2> WHAT IS VALE?</h2>
                            <h3> The Lightbulb</h3>
                            <p> The original design for this project was based on REGIMEN, including its utilization. A personal app that helps you keep track of projects. Much like Github, I wanted for it to allow for multiple users to work on projects at once in groups. Each member of the group contributes their own individual code and works off of others to build anything they want. The level of access for each “repository” is limited to the members of the group which the project is owned by. Though, if chosen, can be viewed by anyone.

                                Something akin to Github and Reddit. Vale serves as an open social hub for hobby or professional developers to create and share their unique ways of creating and coding while maintaining the structure of the main body of work unchanged without permissions.
                            </p>

                            <p>
                                From there it was a matter of figuring out what, and how they related to each other.
                            </p>


                            <h3> We're just associates... </h3>

                            <p>Say hello to Ada.

                                Ada has to join a group and from there she can create projects with/for the group. She can make friends with whoever she chooses and can make comments on commits.

                                So a user: has many groups, commits, comments, projects, friends and is given a membership for the group and an assignment for a project, of which they have many.

                                And we’ll say she has one settings page.
                            </p>

                            <img src={associations} className="associations" />

                        </div>

                    </section>


                    <section id="section-3">
                        <div class="section-container">

                            <h2> IDEATION </h2>

                            <h3> Achilles and the Tortoise </h3>

                            <p> Achilles, the lightning fast runner, challenged a tortoise to a race. For fairness, the tortoise got a head start but Achilles could never seem to overtake the slow tortoise.  For Achilles had to first run to the tortoise's starting point while the tortoise would have moved ahead already.
                                <br></br>  <br></br>
                                There’s an interesting phenomenon I’ve noticed in art. When an artist comes up with a new idea or design, what comes out is only ever a step and a half away from what the artist envisions as the “perfect” design. Because once a certain level of functionality/aesthetic is reached the goal post changes.
                            </p>

                            <div className="feature">
                                <h2> Navigation </h2>
                                <ul>
                                    <p>• A navigation link for each of the pages </p>
                                    <p>• Engagement tracker that lists the number of projects, groups, commits and followers a user has </p>
                                    <p>• A logout button to end web sessions </p>
                                </ul>
                            </div>

                            <div className="feature">
                                <h2> Account Creation </h2>
                                <ul>
                                    <p>• Hide password/Wrong password alert </p>
                                    <p>• Sign up screen with inputs for username, encrypted password and basic user information </p>
                                    <p>• Initiates onboarding following a successful user creation, allowing them to make their first, group, project and pick their given colour and font theme </p>
                                </ul>
                            </div>

                            <div className="feature">
                                <h2> Dashboard </h2>
                                <ul>
                                    <p>• Displays all projects across all groups  </p>
                                    <p>• Each project has a hidden page of information pertaining to it’s group ownership, number of users assigned to it, recent commits etc </p>
                                    <p>• Utility bar with project and group addition buttons and a search filter for created projects </p>
                                </ul>
                            </div>

                            <div className="feature">
                                <h2> Workspace </h2>
                                <ul>
                                    <p>• Allows users to create and edit code commits  </p>
                                    <p>• Has a host of both frontend and back end languages. Major Updates will include a gradual increase in the number of languages. The increase will be based on user responses  </p>
                                    <p>• Seamless and aesthetic design for ease of use and readability for all font themes </p>
                                </ul>
                            </div>

                            <div className="feature">
                                <h2> Settings </h2>
                                <ul>
                                    <p>• Theme picker allowing user to quickly change their background and font scheme </p>
                                    <p>• Allows users to make changes to basic information of their account; email, username, password, etc </p>

                                </ul>
                            </div>

                        </div>
                    </section>


                    <section id="section-4">
                        <div class="section-container">
                            <h2> DESIGN </h2>
                            <h3> COLOUR AND TYPOGRAPHY</h3>
                            <p> Because there’s more than one theme to choose from I had to consider fonts that were readable, visually coherent and would not egregiously alter the state of the component with its size.  </p>


                        
                            <div className="font-colour">

                                <h2> Light Themes</h2>

                                <div className="fonts" style={{ backgroundColor: "#FFF9F2", color: "#38383A", border: "1px solid #38383A" }}>

                                    <h3 style={{color: "#38383A"}}> REGIMEN </h3>
                                    <h1 style={{ fontFamily: "Mulish" }}> Aa  </h1>
                                    <p> MULISH</p>

                                </div>

                                <div className="fonts" style={{ backgroundColor: "#F5FAFF", color: "#0C2A3A", border: "1px solid #0C2A3A" }}>

                                    <h3 style={{color: "#0C2A3A"}}> SKYTALE </h3>
                                    <h1 style={{ fontFamily: "Raleway" }}> Aa  </h1>
                                    <p> RALEWAY </p>

                                </div>

                                <div className="fonts" style={{ backgroundColor: "#F6FFF2", color: "#2E3013", border: "1px solid #2E3013" }}>

                                    <h3 style={{color: "#2E3013"}}> SPRING </h3>
                                    <h1 style={{ fontFamily: "Lato" }}> Aa  </h1>
                                    <p> LATO </p>

                                </div>

                                <div className="fonts" style={{ backgroundColor: "#F5F5F5", color: "#333333", border: "1px solid #333333" }}>

                                    <h3 style={{color: "#333333"}}> BREEZEBLOCK </h3>
                                    <h1 style={{ fontFamily: "Noto sans" }}> Aa  </h1>
                                    <p> NOTO SANS </p>

                                </div>


                                <h2> Dark Themes </h2>

                                <div className="fonts" style={{ backgroundColor: "#281313", color: "#FFFBF6", border: "1px solid #FFFBF6" }}>

                                    <h3 style={{color: "#FFFBF6"}}> HANAFUDA </h3>
                                    <h1 style={{ fontFamily: "Aboreto" }}> Aa  </h1>
                                    <p> ABORETO </p>

                                </div>

                                <div className="fonts" style={{ backgroundColor: "#222532", color: "#F8F8FF", border: "1px solid #F8F8FF" }}>

                                    <h3 style={{color: "#F8F8FF"}}> 8-BIT </h3>
                                    <h1 style={{ fontFamily: "Silkscreen" }}> Aa  </h1>
                                    <p> SILKSCREEN </p>

                                </div>

                                <div className="fonts" style={{ backgroundColor: "#142215", color: "#F5FFF8", border: "1px solid #F5FFF8" }}>

                                    <h3 style={{color: "#F5FFF8"}}> KUSHMA </h3>
                                    <h1 style={{ fontFamily: "Barlow Condensed" }}> Aa  </h1>
                                    <p> BARLOW </p>

                                </div>

                                <div className="fonts" style={{ backgroundColor: "#201422", color: "#F8F1E6", border: "1px solid #F8F1E6" }}>

                                    <h3 style={{color: "#F8F1E6"}}> SOVREIGN </h3>
                                    <h1 style={{ fontFamily: "Montserrat" }}> Aa  </h1>
                                    <p> MONTSERRAT </p>

                                </div>


                            </div>

                            <h3 style={{ textAlign: "center", width: "100%" }}> SPECTRUM OF THE CAPTIVATING SKANDA </h3>

                            <img src={colourscheme} className="colourscheme" />
                        </div>

                    </section>

                </main>


            </div>


        </ div>
    )

}

export default Vale