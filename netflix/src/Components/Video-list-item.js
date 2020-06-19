import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"

const VideoListItem = ({movie}) => {
    console.log('--------')
    console.log('', movie);
    console.log('--------');
    return 
        <li>
            <img src="" />
            <h3>{movie.title}</h3> 
            {movie.title} 
        </li>
}

export default VideoListItem;