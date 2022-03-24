import React from 'react';

function Title({data, name, album}) {
    return (
        <>
            <div className="song-detail">
                <h2>{name}</h2>
                <p>{data} - {album}</p>
            </div>
        </>
    )
}

export default Title;