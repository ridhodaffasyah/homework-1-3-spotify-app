import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {

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
          "title" : json.name
        }); 
      } catch (error) {
        console.log(error);
      }};
      fetchData();}, []);

  return (
    <>
      <div id="app">
        <h1>Song Playlist<span>.</span></h1>
      <div className="container-items">
      <div className="container-song">
          <div className="container-song-in">
            <img
              className="song-pict"
              src={data.img}
              alt="TulusAlbum" />
            <div className="song-detail">
              <h2>{data.name}</h2>
              <p>{data.title}</p>
            </div>
          </div>
          <div className='btn-container'>
            <input className="btn-add" type="submit" value="Add to playlist" />
          </div>
        </div>
        <div className="container-song">
          <div className="container-song-in">
            <img
              className="song-pict"
              src={data.img}
              alt="TulusAlbum" />
            <div className="song-detail">
              <h2>{data.name}</h2>
              <p>{data.title}</p>
            </div>
          </div>
          <div className="btn-container">
            <input className="btn-add" type="submit" value="Add to playlist" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
