import React from "react";
import { useEffect, useState } from "react";
import UpdateBlock from "./UpdateBlock";
import SocialButton from "../components/SocialButton";
import "../CSS/landingBlock.css" 
import "../images/github.png"

const github = require('../images/github.png')
const linkedin = require('../images/linkedin.png')
const gmail = require('../images/gmail.png')
const discord = require('../images/discord.png')
const LandingBlock = ({ updates }) => {

    const socialLogos = [
        {imagePath: github  , colour: "white"} ,
        {imagePath: linkedin , colour: "blue"} ,
        {imagePath: gmail , colour: "white"} ,
        {imagePath: discord , colour: "white"} 
    ]



    const socialList = socialLogos.map(
        item => {
            return (
                <SocialButton image={item.imagePath} colour={item.colour} />
            )
        }
    )



    const updateList = updates.map(
        item => {
            console.log(item)
            return (
                <>
                    <UpdateBlock key={item.id} name={item.name} description={item.description} message={item.commits_url} url={item.git_url} updatedAt={item.updated_at} />
                </>
            )
        }
    )

    return (

        <div className="landing-container">

            <p className="introduction"> Hello, my name is Xavier Amarachi, I’m a Full-stack developer with a focus in interface design and user experience. This website serves as my portfolio and personal blog site. <br/> <br/> I’m not much of a writer or blogger. I have a passion for design and I like to speak through my work. Feel free to look over my projects, read case studies, or just admire some artwork. </p>

       
            <div className="socials"> {socialList} </div>

            <div className="updates-container">
                <h3>  Project Updates </h3>

                <div className="update-list-container">
                {updateList}
                </div>

            </div>


        </div>

    )
}

export default LandingBlock