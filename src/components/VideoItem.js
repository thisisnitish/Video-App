import React from 'react';

const VideoItem = ({ video }) => {
    //getting the thumbnails and videos from the API
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>        
            {video.snippet.title}
        </div>);
};

export default VideoItem;