import React from "react";

import Subscription from "../components/Subscription";
import Search from "../../shared/components/UIElements/Search";

const subscriptionDATA = require('../../shared/data/subs-data.json');
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
    return (
        <div className="container">
            <div class="row row-cols-auto">
                {/* <ul className="list-group"> */}
                    {subscriptionDATA.items.map(item => (
                        <Subscription
                            item={item}
                        />
                    ))}
                {/* </ul> */}

            </div>
        </div>
    );
};

export default SubscriptionsList;