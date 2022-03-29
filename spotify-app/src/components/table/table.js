import React from 'react';
import Track from '../track/track';
import data from '../../constant';
import Search from '../search/search';

function Table() {

    // const [token, setToken] = useState(null);

    const track_loop = data.map((track,idx) => {
        return (<Track key={idx} track_img={track.album.images[2].url} 
        track_name={track.name} 
        track_album={track.album.name} 
        track_artist={track.artists[0].name} 
        track_duration={Math.floor(track.duration_ms/1000/60)+"m"+" "+Math.floor(((track.duration_ms/1000/60)%1)*10)+"s"}/>);
    })

    return(
        <>
            <Search/>
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
                {track_loop}
            </table>
        </>
    )
}

export default Table;