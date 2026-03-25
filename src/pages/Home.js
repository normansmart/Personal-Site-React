import React from "react";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import LandingBlock from "../components/LandingBlock";
import ProjectBlock from "../components/ProjectBlock";
import Navigation from '../components/Navigation';
import CustomParallax from "../components/CustomParallax";
import MusicPlayer from "../components/MusicPlayer";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "../CSS/home.css"

//This page contains 2 sections: the personal info (LandingBlock) and project info (ProjectBlock)
const Homepage = ({ }) => {

    // State variables for the project blocks, they will be used to trigger the display of the project info when the user hovers over the project image in the ProjectBlock component. Each project has its own state variable and show function that will be passed as props to the ProjectBlock component.
    const [showProject, setShowProject] = useState(false)

    const [projects, setProjects] = useState([])
    const regimen = require('../images/regimen-hiRes.png')
    const jwyld = require('../images/jwyld-hiRes.png')
    const bunkbud = require('../images/bunkbud-hiRes.png')
    const val = require('../images/val-hiRes.png')

    const projectInfo = [
        {
            name: "REGIMEN",
            color: "#38383A",
            background: "#FFF7ED",
            font: "Lato",
            idName: "regimen-display",
            image: regimen,
            stack: "Figma | Adobe Illustrator",
            url: "/regimen",
            description: "Habit tracker app. It allows users to set reminders, track progress & customize their experience.",
        },

        {
            name: "VALE",
            color: "#38383A",
            background: "white",
            font: "Lato",
            idName: "val-display",
            image: val,
            stack: "React.js | RubyonRails | CSS | Render",
             url: "/val",
            description: "A code sharing app that lets users form groups and share language specific code snippets.",
        },

        {
            name: "COUNTER DEFENSE",
            color: "",
            background: "",
            font: "",
            idName: "counter-defense-display",
            stack: "Javascript | HTML | CSS | Render",
            description: "Play your friend in ",
        },

        {
            name: "BUNKBUD",
            color: "#519448",
            background: "white",
            font: "Montserrat",
            image: bunkbud,
            idName: "bunkbud-display",
            stack: "Figma | Adobe Illustrator",
             url: "/bunkbud",
            description: "Room sharing app designed for college students. Compatibility matching, Id-verify, messaging.",
        },

        {
            name: "JERSEY WYLDLIFE",
            color: "#133a2bc2",
            background: "#f0e3d0",
            font: "Mulish",
            image: jwyld,
            idName: "jwyld-display",
            stack: "React.js | RubyonRails | CSS | Render",
             url: "/",
            description: "Nuisance wildlife management website. View services, make requests & learn about animals.",
        },

    ]



    useEffect(() => {
        // Load upon page load, fetch the project info and set it to state so it can be passed as props to the landing block

        function projectViewer() {
            setProjects(projectInfo)
        }

        projectViewer();

    }, []);

    // function showRegimen() {
    //     // const regimen = document.getElementById("regimen-display");
    //     // const val = document.getElementById("val-display");
    //     // const bunkbud = document.getElementById("bunkbud-display");
    //     // const jwyld = document.getElementById("jwyld-display");      

    // }

    const displayProject = (e) => {
        const regimen = document.getElementById("regimen-display");
        const val = document.getElementById("val-display");
        const bunkbud = document.getElementById("bunkbud-display");
        const jwyld = document.getElementById("jwyld-display");

        if (e.target.className === "regimen-project") {

            regimen.style.visibility = "visible";
            regimen.style.opacity = 1;
            val.style.visibility = "hidden";
            val.style.opacity = 0;
            bunkbud.style.visibility = "hidden";
            bunkbud.style.opacity = 0;
            jwyld.style.visibility = "hidden";
            jwyld.style.opacity = 0;
            console.log("regimen")

        } else if (e.target.className === "val-project") {

            val.style.visibility = "visible";
            val.style.opacity = 1;
            regimen.style.visibility = "hidden";
            regimen.style.opacity = 0;
            bunkbud.style.visibility = "hidden";
            bunkbud.style.opacity = 0;
            jwyld.style.visibility = "hidden";
            jwyld.style.opacity = 0;
            console.log("val")
        } else if (e.target.className === "bunkbud-project") {

            bunkbud.style.visibility = "visible";
            bunkbud.style.opacity = 1;
            regimen.style.visibility = "hidden";
            regimen.style.opacity = 0;
            val.style.visibility = "hidden";
            val.style.opacity = 0;
            jwyld.style.visibility = "hidden";
            jwyld.style.opacity = 0;
            console.log("bunkbud")
        } else if (e.target.className === "jwyld-project") {

            jwyld.style.visibility = "visible";
            jwyld.style.opacity = 1;
            regimen.style.visibility = "hidden";
            regimen.style.opacity = 0;
            val.style.visibility = "hidden";
            val.style.opacity = 0;
            bunkbud.style.visibility = "hidden";
            bunkbud.style.opacity = 0;
            console.log("jwyld")
        }

    }


    return (
        <body className="home-background">

            <CustomParallax />
            <div className="main-container">

                {/* <Navigation /> */}

                <LandingBlock updates={projects} state={showProject} />
                <ProjectBlock show={displayProject} />

            </div>

        </body>
    )
}

export default Homepage