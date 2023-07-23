import React from "react";
import { Link } from 'react-router-dom';

import './Subscription.css';

const Subscription = props => {
    const snippet = props.item.snippet;
    const thumbnails = snippet.thumbnails;
    const contentDeatils = props.item.contentDetails;
    console.log(snippet.title);
    return (
        // <l1 className="list-group-item">
        <div className="col" style={{paddingBottom: '20px'}}>
            <div className="card">
                <img
                    src={thumbnails.medium.url}
                    className="rounded-circle card-imp-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{snippet.title}</h5>
                    {/* <h6 class="card-subtitle mb-2 text-muted">{snippet.description}</h6> */}
                    <p className="card-text">Total Videos: {contentDeatils.totalItemCount}</p>
                </div>
            </div>
        </div>

        // </l1>

    );
};

export default Subscription;