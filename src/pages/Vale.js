import React from "react";
import Typography from "../components/Typography";

import ProjectSummaryChart from "../components/ProjectSummaryChart";
import PatchNotesCard from "../components/PatchNotesCard";
import Navigation from "../images/project-vale/navigation.gif"
import Accountcreate from "../images/project-vale/accountcreation.gif"
import Dashboard from "../images/project-vale/dashboard.gif"
import Workspace from "../images/project-vale/workspace.gif"
import Settings from "../images/project-vale/settings.gif"
import video1 from "../videos/vale.mp4"
import "../CSS/vale.css"

const Vale = ({ }) => {
    const associations = require("../images/project-vale/associations.png")
    const associations2 = require("../images/project-vale/associations2.png")
    const colourscheme = require("../images/project-vale/colourscheme.png")
    return (
        < div className="page-wrapper" style={{ fontFamily: "Noto Sans" }}>

            <div class="banner-container">
                <img src="" />
            </div>

            <div className="container">
                <main>
                    <section id="section-1" style={{ backgroundColor: "#F5FAFF", color: "#0C2A3A" }}>

                        <div class="section-container">
                            <div class="overview">
                                <img class="" src="" />

                                <h2> BACKGROUND </h2>

                                <p> Valeri is a React based webapp that allows users to write, edit, save and post code projects in several frontend and backend languages. It uses a Ruby on Rails backend to manage authentications, data storage, page routes and assigning projects to users. </p>
                                <p>
                                    This project serves as my capstone during my apprenticeship at Flatiron School’s full-time software engineering bootcamp.
                                </p>
                            </div>


                            <ProjectSummaryChart tool1={"Figma"} tool2={"React.js | CSS"} tool3={"Ruby on Rails"}
                                date={"August 2022"} dateTotal={"on going"}
                                repositoryName={"VALERI.IO "}
                                buttonColour={"#222532"} color={"#333333"} buttonTextColor={"#F8F8FF"} />

                            <video id="test-vid" src={video1} controls="controls" autoplay="true" />
                        </div>

                    </section>

                    <section id="section-2" style={{ backgroundColor: "#F5FAFF", color: "#333333" }}>

                        <div class="section-container">

                            <h2> TABLE ASSOCIATIONS </h2>

                            <p>
                                When users join a group they can create projects with/for the group. To work on a project, users have to be in a group that owns the project.
                                <br></br>
                                So a user: has many groups, and those groups have many projects. The user has access to those projects through the group they are in and can see the commits of other users assigned to the same projects.
                            </p>

                            <img src={associations} className="associations" />
                            <img src={associations2} className="associations" />
                        </div>

                    </section>


                    <section id="section-3" style={{ backgroundColor: "#F5FAFF", color: "#333333" }}>
                        <div class="section-container">

                            <h2> IDEATION </h2>

                            <h3> Achilles and the Tortoise </h3>

                            <p>
                                In order to keep the project simple a limited number of features needed to be implemented to avoid deployment delays so I focused on creating what was needed to make the app functional and saved the "what else?" for future updates.
                            </p>

                            <div className="feature">
                                <h2> Navigation </h2>
                                <ul>
                                    <p>• Links between pages through React Router.  </p>
                                    <p>• Engagement tracker using React Hooks and State Management to update usage information. </p>
                                    <p>• Customized Logout Button to end web sessions. </p>
                                </ul>
                            </div>
                            <img className="display-gif" src={Navigation} />

                            <div className="feature">
                                <h2> Account Creation </h2>
                                <ul>
                                    <p>• Inputs for user information and bcrypt protected password. </p>
                                    <p>• Onboaring feature uses state changes to save coding groups, assign projects and set themes to the backend which is managed through Ruby on Rails</p>
                                </ul>
                            </div>
                            <img className="display-gif" src={Accountcreate} />


                            <div className="feature">
                                <h2> Dashboard </h2>
                                <ul>
                                    <p>• Features reusables components to display project list.  </p>
                                    <p>• Search bar with filtering for precise searches and buttons for new projects/groups.</p>
                                    <p>• Loads project information including; project languages, assigned users and commits with Use State React Hooks and CSS animations. </p>
                                </ul>
                            </div>
                            <img className="display-gif" src={Dashboard} />


                            <div className="feature">
                                <h2> Workspace </h2>
                                <ul>
                                    <p>• Uses NPM packages "CodeEditor" to write code in various front/backend languages and "SyntaxHighlighter" to colour differentiate languages in commits.  </p>
                                    <p>• Allows users to "Declare" their commits to be seen by other users in the same project.</p>
                                </ul>

                            </div>
                            <img className="display-gif" src={Workspace} />


                            <div className="feature">
                                <h2> Settings </h2>
                                <ul>
                                    <p>• Features 8 different colour themes for Light and Dark Modes.  </p>
                                    <p>• Allows users to switch their colour and font scheme through a function that PATCH updates the Rails Backend.   </p>
                                </ul>

                            </div>
                            <img className="display-gif" src={Settings} />
                        </div>
                    </section>


                    <section id="section-4" style={{ backgroundColor: "#222532", color: "#F8F8FF", fontFamily: "Lato" }}>
                        <div class="section-container">
                            <h1 style={{ fontFamily: "silkscreen" }}> DESIGN </h1>
                            <h2 style={{ fontFamily: "silkscreen" }}>
                                <span style={{ color: "#F45050" }}>C</span>
                                <span style={{ color: "#F4ED50" }}>O</span>
                                <span style={{ color: "#7BF450" }}>L</span>
                                <span style={{ color: "#5092F4" }}>O</span>
                                <span style={{ color: "#876792" }}>U</span>
                                <span style={{ color: "#3BD6EB" }}>O</span>
                                <span style={{ color: "#F48150" }}>R</span>
                            </h2>
                            <p> Having various theme options proved to have its hurdles; mainly fonts. While colours were simple to choose, I had to consider fonts that were both readable and did not egregiously alter the components structure with its scale.  </p>

                            <div className="font-colour">

                                <h2 style={{ marginBottom: "0px", marginTop: "50px", fontFamily: "silkscreen" }}> Light Themes</h2>
                                <p style={{ marginBottom: "0px" }}>• Regimen is inspired by a previous moble UI framwork.  </p>
                                <p style={{ marginBottom: "0px" }}>• SkyTale and Spring are based on two characters from One Piece .</p>
                                <p style={{ marginBottom: "0px" }}>• Breezeblock is a greytoned scale.</p>
                                <div className="theme-container">
                                    <div className="fonts" style={{ backgroundColor: "#FFF9F2", color: "#38383A", border: "1px solid #38383A", fontFamily: "Mulish" }}>
                                        <h3 style={{ color: "#38383A" }}> REGIMEN </h3>
                                        <h1> Aa  </h1>
                                        <p> MULISH</p>
                                    </div>
                                    <Typography fontName={"Mulish"} />
                                </div>

                                <div className="theme-container">
                                    <div className="fonts" style={{ backgroundColor: "#F5FAFF", color: "#0C2A3A", border: "1px solid #0C2A3A", fontFamily: "Raleway" }}>
                                        <h3 style={{ color: "#0C2A3A" }}> SKYTALE </h3>
                                        <h1> Aa  </h1>
                                        <p> RALEWAY </p>
                                    </div>
                                    <Typography fontName={"Raleway"} />
                                </div>

                                <div className="theme-container">
                                    <div className="fonts" style={{ backgroundColor: "#F6FFF2", color: "#2E3013", border: "1px solid #2E3013", fontFamily: "Lato" }}>

                                        <h3 style={{ color: "#2E3013" }}> SPRING </h3>
                                        <h1> Aa  </h1>
                                        <p> LATO </p>

                                    </div>
                                    <Typography fontName={"Lato"} />
                                </div>
                                <div className="theme-container">
                                    <div className="fonts" style={{ backgroundColor: "#F5F5F5", color: "#333333", border: "1px solid #333333", fontFamily: "Noto sans" }}>

                                        <h3 style={{ color: "#333333" }}> BREEZEBLOCK </h3>
                                        <h1> Aa  </h1>
                                        <p> NOTO SANS </p>

                                    </div>
                                    <Typography fontName={"Noto sans"} />
                                </div>

                                <h2 style={{ color: "#222532", WebkitTextStroke: "#F8F8FF", WebkitTextStrokeWidth: "2px", marginBottom: "0px", marginTop: "50px", fontFamily: "silkscreen" }} > Dark Themes </h2>
                                <p style={{ marginBottom: "0px" }}>• Hanafuda is inspired by the sun earrings of Tanjiro Kamado.</p>
                                <p style={{ marginBottom: "0px" }}>• 8-bit was difficult to consider because of its readability but had the highest use count among the themes.</p>
                                <p style={{ marginBottom: "0px" }}>• Kushma and Sovreign are original themes.</p>

                                <div className="theme-container">
                                    <div className="fonts" style={{ backgroundColor: "#281313", color: "#FFFBF6", border: "1px solid #FFFBF6", fontFamily: "Aboreto" }}>

                                        <h3 style={{ color: "#FFFBF6" }}> HANAFUDA </h3>
                                        <h1> Aa  </h1>
                                        <p> ABORETO </p>

                                    </div>
                                    <Typography fontName={"Aboreto"} />
                                </div>

                                <div className="theme-container">
                                    <div className="fonts" style={{ backgroundColor: "#222532", color: "#F8F8FF", border: "1px solid #F8F8FF", fontFamily: "Silkscreen" }}>

                                        <h3 style={{ color: "#F8F8FF" }}> 8-BIT </h3>
                                        <h1> Aa  </h1>
                                        <p> SILKSCREEN </p>

                                    </div>
                                    <Typography fontName={"Silkscreen"} />
                                </div>

                                <div className="theme-container">
                                    <div className="fonts" style={{ backgroundColor: "#142215", color: "#F5FFF8", border: "1px solid #F5FFF8", fontFamily: "Barlow Condensed" }}>

                                        <h3 style={{ color: "#F5FFF8" }}> KUSHMA </h3>
                                        <h1> Aa  </h1>
                                        <p> BARLOW </p>

                                    </div>
                                    <Typography fontName={"Barlow Condensed"} />
                                </div>

                                <div className="theme-container">
                                    <div className="fonts" style={{ backgroundColor: "#201422", color: "#F8F1E6", border: "1px solid #F8F1E6", fontFamily: "Montserrat" }}>

                                        <h3 style={{ color: "#F8F1E6" }}> SOVREIGN </h3>
                                        <h1> Aa  </h1>
                                        <p> MONTSERRAT </p>

                                    </div>
                                    <Typography fontName={"Montserrat"} />
                                </div>
                            </div>

                            <h3 style={{ textAlign: "center", width: "100%", fontFamily: "silkscreen" }}> SPECTRUM OF THE CAPTIVATING SKANDA </h3>
                            <img src={colourscheme} className="colourscheme" />

                            <p> In future updates there will be more themes added. I plan to have a set of ten options in light and dark themes. The fonts are provided through Google Fonts imports and some public fonts. </p>

                        </div>

                    </section>


                    <section id="section-6" style={{ backgroundColor: "#222532", color: "#F8F8FF", fontFamily: "Silkscreen" }}>
                        <div class="section-container">
                            <h1> PATCH NOTES </h1>

                            <div className="updates-scroll-container">
                                <PatchNotesCard
                                    patch={"UPCOMING UPDATE PATCH 2.0.01"}
                                    date={"Oct 1, 2023"}
                                    patchSummary={"Incoming Database update for image additions through ActiveRecordBlobs. Major UI update; page components redesign,   "}
                                    fix1={"Fixed problem with backend not working for active storage blobs."}
                                    fix2={"Fixed a CSS bug that called project info tab to cut off after 2 commits."}
                                    fix3={"Adjusted the USerTab to allow space for photos."} />

                                <PatchNotesCard
                                    patch={"PATCH 1.06"}
                                    date={"April, 2022"}
                                    patchSummary={"Minor UI fixes. Updates for Dashboard, Settings and Explore pages."}
                                    fix1={"Fixed a bug in the Dashboard that made the project list float center instead of left."}
                                    fix2={"Fixed and issue with the ProjectAddForm failing to assign users default cohort on first load."}
                                    fix3={"Adjusted UserTab component CSS to be reused in the explore page."} />

                                <PatchNotesCard
                                    patch={"PATCH 1.05"}
                                    date={"Jan 13, 2023"}
                                    patchSummary={"Simple desctructuring to for clean code. Updates to Explore page and Project Card "}
                                    fix1={"Fixed a bug causing the project cards to not show the group name it is assigned to on novel projects."}
                                    fix2={"Fixed a bug in the Explore page causing the app to error out when the projects tab is clicked"}
                                    fix3={"Added Inline styling to components in the Dashboard, WorkSpace and Explore pages."}
                                />

                                <PatchNotesCard
                                    patch={"PATCH 1.04"}
                                    date={"Nov 3, 2022"}
                                    patchSummary={"UI changes and page adjustments. NEW PAGE: Explore Tab. Users can join other user groups, view their info tiles and added projects. "}
                                    fix1={"Fixed display issues for page components related to zindex positioning."}
                                    fix2={"Fixed bug causing group and projects assignment to not be made when a project is created."}
                                    fix3={"Fixed a bug in the 'themesetter' function causing themes not to change."}
                                    fix4={"Fixed page break error caused by Silkscreen font when the page scales down."} />

                                <PatchNotesCard
                                    patch={"PATCH 1.03"}
                                    date={"Oct 28, 2022"}
                                    patchSummary={"Minor UI changes and updates to component CSS files."}
                                    fix1={"Fixed a bug in the Dashboard that would cause the projects list to error out when the seach bar was used"}
                                    fix2={"Fixed a CSS bug cassing the aspect ratio to become misaligned when scaled down to Mac and Mac Air laptops"}
                                />

                                <PatchNotesCard
                                    patch={"PATCH 1.02"}
                                    date={"Oct 13, 2022"}
                                    patchSummary={"This update is for simple destructuring on page components to reduce bulk code and fixing "}
                                    fix1={"Fixed a bug that caused the app to stop working when the project button was clicked"}
                                    fix2={"Modified the group adding form to work for chosen groups in the dropdown menu"}
                                    fix3={"Fixed a bug causing the project slide tab to hang"} />

                            </div>
                        </div>
                    </section>
                </main>


            </div>


        </ div >
    )

}

export default Vale