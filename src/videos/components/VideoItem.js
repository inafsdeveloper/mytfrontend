import React from "react";

const VideoItem = props => {
    const videoItem = props.item;
    return (
        <li>
            <h2> {videoItem.snippet.title} </h2>
        </li>
    );
};

export default VideoItem;