import React from "react";

import Subscription from "../components/Subscription";
import Search from "../../shared/components/UIElements/Search";

const subscriptionDATA = require('../../shared/data/subs-data.json');
const SubscriptionsList = props => {

    return (
        <div className="container">
            <div class="row">
                <ul className="list-group">
                    {subscriptionDATA.items.map(item => (
                        <Subscription
                            item={item}
                        />
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default SubscriptionsList;