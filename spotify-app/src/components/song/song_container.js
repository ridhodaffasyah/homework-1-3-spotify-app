import React from 'react';
import Button from '../button/button';
import Image from '../image/song_image';
import Title from '../title/song_title';
import { useState, useEffect } from 'react';

function Song() {

    const [data, setData] = useState(
    {
        "img" : "",
        "name" : "",
        "title" : "",
    }
    );
    
    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json");
        const json = await response.json();
        setData({
            "img" : json.album.images[0].url,
            "name" : json.artists[0].name,
            "title" : json.name,
            "album" : json.album.name
        }); 
        } catch (error) {
        console.log(error);
        }};
        fetchData();}, []);

    return (
        <>
            <div className="container-items">
                <div className="container-song">
                    <div className="container-song-in">
                        <Image data={data.img}/>
                        <Title data={data.title} name={data.name} album={data.album}/>
                    </div>
                    <Button/>
                </div>
            </div>
        </>
    )
}

export default Song;