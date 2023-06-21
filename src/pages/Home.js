import React from "react";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import LandingBlock from "../components/LandingBlock";
import ProjectBlock from "../components/ProjectBlock";
import "../CSS/home.css"


//This page contains 2 sections: the personal info (LandingBlock) and project info (ProjectBlock)
const Homepage = ({ }) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/normansmart/repos?per_page=100", {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
            .then(r => r.json())
            .then(item => {
           
              setProjects(  item.filter(
                    item => {
                        return item.name === "jersey-wyldlife" ||
                            item.name === "Attack-on-titan-tribute-game" ||
                            item.name === "REGIMEN" ||
                            item.name === "Journal"
                          
                    }
                )
              )

            }).catch(error =>{
                console.log(error)
            })



        // async function test() {

        //     const octokit = new Octokit({
        //         auth: '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'
        //     })

        //     await octokit.request('GET /users/{username}/repos', {
        //         username: 'normansmart',
        //         headers: {
        //             'X-GitHub-Api-Version': '2022-11-28'
        //         }
        //     })



        // }



    }, [])


    useEffect(() => {
        fetch("https://api.github.com/repos/normansmart/Journal/commits", {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
            .then(r => r.json())
            .then(item => {
             console.log(item)

            })




    }, [])


    return (

        <div className="main-container">
            
            <LandingBlock updates={projects} />

            <ProjectBlock />

        </div>

    )
}

export default Homepage