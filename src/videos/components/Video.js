import React from "react";

import './Video.css';
const Video = props => {
    const snippet = props.item.snippet;
    const thumbnails = snippet.thumbnails;
    const channelThumbnail = props.channelThumbnail;
    const YOUTUBE_BASE_VIDEO_URL = "https://www.youtube.com/embed";
    return (
        <div class="row embed-responsive embed-responsive-16by9" style={{padding: "10px"}}>
                <iframe
                    className="embed-responsive-item"
                    src={`${YOUTUBE_BASE_VIDEO_URL}/${props.item.id.videoId}`}
                    title="YouTube video" allowfullscreen>
                </iframe>
        </div>




    );

};

export default Video;