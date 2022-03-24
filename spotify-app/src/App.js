import './App.css';
import Song from './components/song/song_container';

const App = () => {

  return (
    <>
      <div id="app">
        <h1>Song Playlist<span>.</span></h1>
        <Song/>
        <Song/>
      </div>
    </>
  );
}

export default App;
