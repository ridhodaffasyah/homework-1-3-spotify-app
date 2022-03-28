import './App.css';
import Song from './components/song/song_container';
import Table from './components/table/table';

const App = () => {

  return (
    <>
      <div id="app">
        <h1>Track list<span>.</span></h1>
        <Table/>
      </div>
    </>
  );
}

export default App;
