import React, { useState } from "react";

import Video from '../components/Video';
import Search from "../../shared/components/UIElements/Search";

const DummyVidesData = require('../../shared/data/videos-data.json');

const VideosList = props => {
    const [searchText, setSearchText] = useState();
    const [videosData, setVidoesData] = useState(DummyVidesData.items);

    const inputChangeHandler = event => {
        setSearchText(event.target.value);
    };

    const searchHandler = event => {
        event.preventDefault();
        const filteredData = DummyVidesData.items.filter(item => item.snippet.title.includes(searchText));
        setVidoesData(filteredData);
    };

    return (
        <div id="videos" className="container">
            <Search
                inputValue={searchText}
                handleInputChange={inputChangeHandler}
                placeholderText="Search your videos..."
                handleSearch={searchHandler}
            />
            <div class="row row-cols-auto justify-content-center">
                {videosData.map(item => (
                    <Video
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideosList;