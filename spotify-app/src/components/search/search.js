import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Track from '../track/track';
import axios from 'axios';
import Playlist from '../playlist/playlist';
import Button from '../button/button';
import { useSelector} from 'react-redux';

function Search() {

    const [track, setTrack] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedTrack, setSelectedTrack] = useState([]);
    const [user, setUser] = useState([]);
    const [titleForm, setTitleForm] = useState("");
    const [descForm, setDescForm] = useState("");

    const user_token = useSelector(state => state.user.user_token);

    // console.log(user_token);

    const fetchData = () => {
        if (!query) {
            return;
        }
        axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
            headers: {
                Authorization: "Bearer " + user_token
            }
        }).then((response) => {
            setTrack(response.data.tracks.items);
        }).catch((error) => {
            console.log(error);
        });
    }

    const fetchUser = () => {
        axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: "Bearer " + user_token
            }
        })
        .then(res => {
            setUser(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handlePlaylistInitiate = (e) => {
        e.preventDefault();
        if (titleForm.length < 10) {alert("Title must be at least 10 characters")};
        let play = axios.post(`https://api.spotify.com/v1/users/${user.id}/playlists`, JSON.stringify({
            name: titleForm,
            description: descForm,
            public: false
        }), {
            headers: {
                Authorization: "Bearer " + user_token
            }
        })
        .then(res => {
            // setPlaylist(res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })

        return play;
    }

    const addTrackToPlaylist = (playlistID) => {
        axios.post(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, JSON.stringify({
            uris: selectedTrack,
        }),{
            headers: {
                Authorization: "Bearer " + user_token
            }
        })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handlePlaylist = async (e) => {
        e.preventDefault();
        const playlistId = await handlePlaylistInitiate(e);
        addTrackToPlaylist(playlistId.id);
        alert("Playlist created");
        clearState();
    }

    const clearState = () => {
        setSelectedTrack([]);
        setTitleForm("");
        setDescForm("");
    };

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

    const handleTitleChange = (e) => {
        const { value } = e.target;
        setTitleForm(value);
    }

    const handleDescChange = (e) => {
        const { value } = e.target;
        setDescForm(value);
    }

    useEffect(() => {
        if (user_token) {
            fetchUser();
        }
    }, [user_token]);

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
            <Playlist handleTitleChange={handleTitleChange} handleDescChange={handleDescChange} handlePlaylist={handlePlaylist}></Playlist>
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
                                        track_duration={Math.floor(track.duration_ms / 1000 / 60) + "m " + Math.floor(((track.duration_ms / 1000 / 60) % 1) * 10) + "s"}
                                    >
                                        <Button statusSelect={status} removeFromList={removeFromList} addToList={addToList} id={track.uri} />
                                    </Track>);
                            })}
                        </table> : <><div></div><table>
                        </table></>}
            </div>
        </>
    )
}

export default Search;