import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
    //getting the thumbnails and videos from the API
    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>        
        </div>
    );
};

export default VideoItem;