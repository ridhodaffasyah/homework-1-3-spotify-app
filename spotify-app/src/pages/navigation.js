import React from 'react';
import { useState, useEffect } from 'react';
import Search from '../components/search/search';
import Login from '../login';
import { redirect } from '../spotifyendpoint';

function Navigation() {

    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash;
        window.location.hash = "";

        if(!token && hash) {
        const _token = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token", _token);
        setToken(_token)
        }}, [token]
    );

    // console.log(token)

    return !token ? (
        <>
        <div id="app">
            <header className="App-header-2">
            <Login/>
            </header>
        </div>
        </>
    ) : <div id="app">
        <div className='container-button'>
            <a className="sp_button" href={redirect}>
                <div className="logout-btn">Logout</div>
            </a>
            <a className="sp_button" href={redirect}>
                <div className="profile-btn">Profile</div>
            </a></div>
            <header className="App-header">
            <Search token={token}/>
            </header>
        </div>;
}

export default Navigation;
