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

    const projectInfo = [
        {
            name: "Regimen",
            color: "",
            background: "",
            font: "",
            idName: "regimen-display",
            description: "A habit tracking app designed & prototyped in Figma. It allows users to create and track their habits, set reminders, and view their progress over time.",
        },

        {
            name: "Vale",
            color: "",
            background: "",
            font: "",
            idName: "val-display",
            description: "A code sharing app made in React.js & Ruby on Rails. It allows users to create and share code snippets, view and comment on other users' snippets, and search/write code by language or keyword.",
        },

        {
            name: "Counter Defense",
            color: "",
            background: "",
            font: "",
            idName: "counter-defense-display",
            description: "A turn based Pokemon card game made in React.js. It allows users to play against an opponent, choose their deck, and battle using their cards' unique abilities and stats.",
        },

        {
            name: "BunkBud",
            color: "",
            background: "",
            font: "",
            idName: "bunkbud-display",
            description: "A roommate matching app designed for IOS. It allows users to create a profile, answer questions about their lifestyle and preferences, and view potential roommate matches based on compatibility scores.",
        },

        {
            name: "Jersey Wyldlife",
            color: "",
            background: "",
            idName: "jwyld-display",
            description: "A wildlife management website made in JS, HTML & CSS. It allows users to view information about local wildlife, schedule appointments and learn about their services.",
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


        if (e.target.className === "regimen-project") {
            const regimen = document.getElementById("regimen-display");
            const val = document.getElementById("val-display");
            const bunkbud = document.getElementById("bunkbud-display");
            const jwyld = document.getElementById("jwyld-display");
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
            const val = document.getElementById("val-display");
            const regimen = document.getElementById("regimen-display");
            const bunkbud = document.getElementById("bunkbud-display");
            const jwyld = document.getElementById("jwyld-display");
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
            const bunkbud = document.getElementById("bunkbud-display");
            const regimen = document.getElementById("regimen-display");
            const val = document.getElementById("val-display");
            const jwyld = document.getElementById("jwyld-display");
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
            const jwyld = document.getElementById("jwyld-display");
            const regimen = document.getElementById("regimen-display");
            const val = document.getElementById("val-display");
            const bunkbud = document.getElementById("bunkbud-display");
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

            {/* <CustomParallax /> */}
            <div className="main-container">

                {/* <Navigation /> */}

                <LandingBlock updates={projects} state={showProject} />
                <ProjectBlock show={displayProject} />
                <div className="music-bot">
                    <MusicPlayer />
                    <AudioPlayer
                        id="audio-player"
                        autoPlay={false}
                        showJumpControls={false}
                        volume={.2}
                        src="https://coderadio-admin-v2.freecodecamp.org/listen/coderadio/radio.mp3"
                        onPlay={e => console.log("onPlay")}

                    // other props here
                    />
                </div>
            </div>

        </body>
    )
}

export default Homepage