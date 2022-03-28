import React from 'react';

function Track({track_number, track_img, track_name, track_album, track_artist, track_duration}) {
    return (
        <>
            <tbody className='table-data'>
                <tr>
                    <td>{track_number}</td>
                    <td><img src={track_img} alt="track images" className='track-img'></img></td>
                    <td className='track-name'>{track_name}</td>
                    <td>{track_album}</td>
                    <td>{track_artist}</td>
                    <td>{track_duration}</td>
                </tr>
            </tbody>
        </>
    )
}

export default Track;