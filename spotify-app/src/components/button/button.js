import React from 'react';

function Button({play}) {

    return (
        <>
            <div className='btn-container'>
                <a className="btn-add" href={play} target="_blank" rel="noreferrer">Play Music</a>
            </div>
        </>
    )
}

export default Button;