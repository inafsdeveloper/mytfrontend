import React from "react";
import VideoItem from "../components/VideoItem";

const DATA = require('../../shared/data/videos-list.json');

const VideosList = props => {
    return (<ul>
        {DATA.items.map(item => (
            <VideoItem
                item={item}
            />
        ))}
    </ul>);
};

export default VideosList;