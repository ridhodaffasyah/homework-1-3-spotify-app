import React from 'react';
import Button from '../button/button';


function Playlist(track_img, track_name, track_album, track_artist, track_duration, statusSelect, removeFromList, addToList, id) {

    return (
        <>
        <tbody className='table-data'>
                <tr>
                    <td><img src={track_img} alt="track images" className='track-img'></img></td>
                    <td className='track-name'>{track_name}</td>
                    <td>{track_album}</td>
                    <td>{track_artist}</td>
                    <td>{track_duration}</td>
                    <td><Button statusSelect={statusSelect} removeFromList={removeFromList} 
                    addToList={addToList} id={id}/></td>
                </tr>
            </tbody>
        </>
    )
}

export default Playlist;