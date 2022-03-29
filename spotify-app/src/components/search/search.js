import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Track from '../track/track';
import { useEffect } from 'react';
import axios from 'axios';


function Search() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        if (window.localStorage.getItem("token")) {
            setToken(window.localStorage.getItem("token"));
        }
    }, []);

    const fetchData = (query) => {
        axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((response) => {setData(response.data.tracks.items);}).catch((error) => {
            console.log(error);
        }) ;
    }

    const handleInput = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        fetchData(query)
    }

    console.log(data);

    return (
        <>
            <h1 className='title'>Track List<span>.</span></h1>
            <div className='input'>
                <input
                    placeholder='Cari gambar kesukaanmu'
                    type='text'
                    className="search-input"
                    onFocus={(e) => {e.placeholder=''}}
                    onBlur={(e) => {e.placeholder='Cara gambar kesukaanmu'}}
                    onChange={(e) => handleInput(e)}
                >
                </input>
                <button
                    value='Search'
                    type='submit'
                    className="search-button"
                    onClick={fetchData}
                >
                    <FaSearch />
                </button>
            </div>
            <div className='grid'>
            <table className='table'>
                <thead className='table-head'>
                    <tr>
                        <th> </th>
                        <th>Name</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Duration</th>
                        <th className='no-track'></th>
                    </tr>
                </thead>
                {data.map((track,idx) => {
                    return (
                        <Track key={idx} 
                        track_img={track.album.images[2].url} 
                        track_artist={track.artists[0].name} 
                        track_album={track.album.name} 
                        track_name={track.name}
                        track_duration={Math.floor(track.duration_ms/1000/60)+"m "+Math.floor(((track.duration_ms/1000/60)%1)*10)+"s"}
                        play={track.preview_url}/> )
                    })}
            </table>
            </div>
        </>
    )
}

export default Search;