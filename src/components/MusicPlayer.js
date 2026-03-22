import React from "react";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import "../CSS/musicplayer.css"
import { da, el } from "date-fns/locale";

const MusicPlayer = ({ }) => {


    const [songAlbum, setSongAlbum] = useState(null);
    const [songName, setSongName] = useState(null);
    const [songArtist, setSongArtist] = useState(null);
    const [songArt, setSongArt] = useState(null);
    const [songDuration, setSongDuration] = useState(5000);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // Replace with your actual API endpoint
            const response = await fetch('https://coderadio-admin-v2.freecodecamp.org/api/nowplaying_static/coderadio.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();

            if (
                result.now_playing.song.title === songName &&
                result.now_playing.song.artist === songArtist &&
                result.now_playing.song.album === songAlbum &&
                result.now_playing.song.art === songArt &&
                result.now_playing.duration === songDuration
            ) {
                // If the song information hasn't changed, we can skip updating the state
                setIsLoading(false);
                return;
            } else {
                setSongName(result.now_playing.song.title);
                setSongArtist(result.now_playing.song.artist);
                setSongAlbum(result.now_playing.song.album);
                setSongArt(result.now_playing.song.art);
                setSongDuration(result.now_playing.duration);
            }


            console.log(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };


    useLayoutEffect(() => {
        // Fetch data immediately upon component mount
        fetchData();


        // Set up interval to fetch data every 5 seconds (5000 milliseconds)
        const intervalId = setInterval(() => {
            fetchData();
            
        }, 30000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    if (isLoading && !data) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    console.log(data);
    return (
        <class className="musicBar">
            {/* <img className="logoHome" src={image} /> */}
            <img className="album-art" alt="album art" data-meta="picture" src={songArt}></img>
            <div className="song-information" >
                <p className="song-name">{songName}</p>
                <p className="song-artist">{songArtist}</p>
                <p className="song-album">{songAlbum}</p>
            </div>
           
        </class>
    )
}

export default MusicPlayer