import React from "react";

import Video from '../components/Video';

const videsData = require('../../shared/data/videos-data.json');

const VideosList = props => {
    return (
        <div className="container">
        <div class="row">
            <ul className="list-group">
                {videsData.items.map(item => (
                    <Video
                        item={item}
                    />
                ))}
            </ul>

        </div>
    </div>
    );
};

export default VideosList;