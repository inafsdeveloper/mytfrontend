import React, {useState} from "react";

import Subscription from "../components/Subscription";
import Search from "../../shared/components/UIElements/Search";

const DummySubscriptionDATA = require('../../shared/data/subs-data.json');
const SubscriptionsList = props => {

    // return (
    //     <div className="card-group">
    //         {subscriptionDATA.items.map(item => (
    //                     <Subscription
    //                         item={item}
    //                     />
    //                 ))}
    //     </div>
    // );

    const [searchText, setSearchText] = useState();
    const [subsData, setSubsData] = useState(DummySubscriptionDATA.items);
    
    const inputChangeHandler = event => {
        setSearchText(event.target.value);
    };

    const searchHandler = event => {
        event.preventDefault();        
        const filteredData = DummySubscriptionDATA.items.filter(item => item.snippet.title.includes(searchText));        
        setSubsData(filteredData);
    };

    return (
        <div id="subscriptions" className="container">
            <Search
                inputValue={searchText}
                handleInputChange={inputChangeHandler}
                placeholderText="Search your subscriptions..."
                handleSearch={searchHandler}
            />

            <div class="row row-cols-auto justify-content-center ">
                {subsData.map(item => (
                    <Subscription
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default SubscriptionsList;