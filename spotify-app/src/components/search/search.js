import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Track from '../track/track';
import { useEffect } from 'react';
import axios from 'axios';

function Search() {

    const [track, setTrack] = useState([]);
    const [query, setQuery] = useState("");
    const [token, setToken] = useState("");
    const [selectedTrack, setSelectedTrack] = useState([]);

    useEffect(() => {
        if (window.localStorage.getItem("token")) {
            setToken(window.localStorage.getItem("token"));
        }
    }, []);

    const fetchData = () => {
        if (!query) {
            return;
        }
        axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((response) => {
            setTrack(response.data.tracks.items);
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleInput = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    const addToList = (id) => {
        const selectedSong = selectedTrack;
        selectedSong.push(id);
        setSelectedTrack(selectedSong);
    }

    const removeFromList = (id) => {
        const selectedSong = selectedTrack;
        for (let i = 0; i < selectedTrack.length; i++) {
            if (selectedTrack[i] === id) {
                selectedSong.splice(i, 1);
            }
        }
        setSelectedTrack(selectedSong);
    }

    const getStatus = (id) => {
        let status = false;
        for (let i = 0; i < selectedTrack.length; i++) {
            if (selectedTrack[i] === id) {
                status = true;
            }
        }
        return status;
    }
    // console.log(track);
    // console.log(selectedTrack);

    return (
        <>
            <h1 className='title'>Track List<span>.</span></h1>
            <div className='input'>
                <input
                    placeholder='Cari track favoritmu disini...'
                    type='text'
                    className="search-input"
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
            {track.length > 0 ?
            <table className='table'>
                <thead className='table-head'>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Duration</th>
                        <th className='no-track'></th>
                    </tr>
                </thead>
                {track.map((track) => {
                    const status = getStatus(track.uri);
                    return (
                        <Track key={track.uri} 
                        track_img={track.album.images[2].url} 
                        track_artist={track.artists[0].name} 
                        track_album={track.album.name} 
                        track_name={track.name}
                        track_duration={Math.floor(track.duration_ms/1000/60)+"m "+Math.floor(((track.duration_ms/1000/60)%1)*10)+"s"}
                        id={track.uri}
                        statusSelect={status}
                        addToList={addToList}
                        removeFromList={removeFromList}/> )
                    })}
            </table> : 
            <table>
            </table>}
            </div>
        </>
    )
}

export default Search;