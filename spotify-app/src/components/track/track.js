import React from 'react'

function Track ({ trackImg, trackName, trackAlbum, trackArtist, trackDuration, children }) {
  return (
        <>
            <tbody className='table-data'>
                <tr>
                    <td><img src={trackImg} alt="track images" className='track-img'></img></td>
                    <td className='track-name'>{trackName}</td>
                    <td>{trackAlbum}</td>
                    <td>{trackArtist}</td>
                    <td>{trackDuration}</td>
                    <td>{children}</td>
                </tr>
            </tbody>
        </>
  )
}

export default Track
