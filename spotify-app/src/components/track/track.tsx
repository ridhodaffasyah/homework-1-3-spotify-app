import React from 'react'

type Props = {
    trackImg: string,
    trackName: string,
    trackArtist: string,
    trackAlbum: string,
    trackDuration: string,
    children?: React.ReactNode
}

const Track = ({ trackImg, trackName, trackAlbum, trackArtist, trackDuration, children } : Props) => {
  return (
        <div className='card-song'>
            <div className='img-song'>
                <img src={trackImg} alt="track images" className='track-img'/>
            </div>
            <div className='content-song'>
                <div className='track-name'>{trackName}</div>
                <div className='album'>{trackAlbum}</div>
                <div className='artist'>{trackArtist}</div>
                <div className='duration'>{trackDuration}</div>
                <div className='button'>{children}</div>
            </div>
        </div>
  )
}

export default Track
