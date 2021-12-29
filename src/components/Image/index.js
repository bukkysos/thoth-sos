import React from 'react'

export const Image = ({image="", fallback}) => {
    return (
        <>
        <picture>
            <source srcSet={image} type='image/avif'/>
            <source srcSet={image} type='image/webp'/>
            <img src={fallback} alt='My portrait'/>
        </picture>
        </>
    )
}

