import React from "react";
import { useEffect, useState } from "react";
import UpdateBlock from "./UpdateBlock";
import SocialButton from "../components/SocialButton";
import Navigation from '../components/Navigation';
import MusicPlayer from "../components/MusicPlayer";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "../CSS/landingBlock.css"
import "../images/github.png"


const github = require('../images/github.png')
const linkedin = require('../images/linkedin.png')
const gmail = require('../images/gmail.png')
const discord = require('../images/discord.png')


const LandingBlock = ({ updates, state }) => {

    const socialLogos = [
        { imagePath: github, colour: "white" },
        { imagePath: linkedin, colour: "blue" },
        { imagePath: gmail, colour: "white" },
        { imagePath: discord, colour: "white" }
    ]

    const socialList = socialLogos.map(
        item => {
            return (
                <SocialButton image={item.imagePath} />
            )
        }
    )

    const updateList = updates.map(
        item => {
            console.log(item)
            return (

                <UpdateBlock key={item.id} name={item.name} description={item.description} url={item.url} id={item.idName} state={state} color={item.color} background={item.background} image={item.image} font={item.font} stack={item.stack} />

            )
        }
    )

    return (

        <div className="landing-container">

            <Navigation />
            <p className="introduction"> <span> <h1> I’m a full-stack developer and Special-Education educator dedicated to building engaging applications and creating impactful, accessible learning experiences.
            </h1> </span>

                Explore the solar system to navigate my projects—each planet leads to a build and its case study. You’ll the music bar below to set the vibe while you browse.</p>

            <div className="socials"> {socialList} </div>


            <div className="update-list-container">
                {updateList}
            </div>

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

    )
}

export default LandingBlock