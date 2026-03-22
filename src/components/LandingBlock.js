import React from "react";
import { useEffect, useState } from "react";
import UpdateBlock from "./UpdateBlock";
import SocialButton from "../components/SocialButton";
import "../CSS/landingBlock.css"
import "../images/github.png"

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import ReactPlayer from 'react-player'

import ReactAudioPlayer from 'react-audio-player';

const github = require('../images/github.png')
const linkedin = require('../images/linkedin.png')
const gmail = require('../images/gmail.png')
const discord = require('../images/discord.png')
const LandingBlock = ({ updates }) => {

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
                    <UpdateBlock key={item.id} name={item.name} description={item.description} message={item.commits_url} url={item.clone_url} updatedAt={item.updated_at} />
                </>
            )
        }
    )

    return (

        <div className="landing-container">

            <p className="introduction"> <span> <h1> Hello, I'm a full-stack developer and special education teacher. 
                I like to build apps for fun and educational content for my students.
            </h1> </span>

                Feel free to look over some of my projects, read their case studies, look through my artwork or just enjoy the music.</p>
            <div className="socials"> {socialList} </div>
            <div className="updates-container">
            
                <div className="update-list-container">
                    {updateList}
                </div>
            </div>
        </div>

    )
}

export default LandingBlock