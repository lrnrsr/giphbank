import React, { lazy, Suspense } from 'react'
import './display.css'
const Image = lazy(() => import('./image'))

const Display = props => {
    return (
        <div className="display-container">
            {props.gifs.map((gif) => (
                <Suspense
                    fallback={<div className="spinner" />}
                    key={gif.id}
                >
                    <Image
                        alt={gif.title}
                        src={gif.images.original.url}
                    />
                </Suspense>
            ))}
        </div>
    )
}

export default Display