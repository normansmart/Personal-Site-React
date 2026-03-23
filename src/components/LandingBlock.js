import React from "react";
import { useEffect, useState } from "react";
import UpdateBlock from "./UpdateBlock";
import SocialButton from "../components/SocialButton";
import MusicPlayer from "../components/MusicPlayer";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "../CSS/landingBlock.css"
import "../images/github.png"

import ReactPlayer from 'react-player'

import ReactAudioPlayer from 'react-audio-player';

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
                <>
                    <UpdateBlock key={item.id} name={item.name} description={item.description} message={item.commits_url} url={item.clone_url} updatedAt={item.updated_at} id={item.idName} state={state} color={item.color} background={item.background} image={item.image} />
                </>
            )
        }
    )

    return (

        <div className="landing-container">

            <p className="introduction"> <span> <h1> I'm a full-stack developer and special education teacher.
                I like to build apps for fun and educational content for my students.
            </h1> </span>

                Feel free to look over some of my projects, read their case studies, look through my artwork or just enjoy the music.</p>
            <div className="socials"> {socialList} </div>
            <div className="updates-container">

                <div className="update-list-container">
                    {updateList}
                </div>
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