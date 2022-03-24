import React from 'react';

function Image({data}) {
    return (
        <>
            <img
            className="song-pict"
            src={data}
            alt="Album" />
        </>
    )
}

export default Image;