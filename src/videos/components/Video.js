import React from "react";

import './Video.css';
const Video = props => {
    const snippet = props.item.snippet;
    const thumbnails = snippet.thumbnails;
    const channelThumbnail = props.channelThumbnail;
    const YOUTUBE_BASE_VIDEO_URL = "https://www.youtube.com/embed";
    return (
        <l1 className="list-group-item" style={{width: '80%'}}>
            <div class="ratio ratio-16x9">
                <iframe
                    src={`${YOUTUBE_BASE_VIDEO_URL}/${props.item.id.videoId}`}
                    title="YouTube video" allowfullscreen>
                </iframe>
            </div>
            <div>
                <h5>{snippet.title}</h5>
            </div>
        </l1>

    );

};

export default Video;