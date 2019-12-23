import React from 'react'
import './display.css'

const Display = props => {
    return (
        <div className="display-container">
            {props.gifs.map((gif) => (
                <img
                    alt={gif.title}
                    className='display-image'
                    key={gif.id}
                    src={gif.images.original.url}
                />
            ))}
        </div>
    )
}

export default Display