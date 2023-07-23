import React from "react";
import { Link } from 'react-router-dom';

import './Subscription.css';

const Subscription = props => {
    const snippet = props.item.snippet;
    const thumbnails = snippet.thumbnails;
    const contentDeatils = props.item.contentDetails;
    // console.log(snippet.title);
    return (
        <div className="col" style={{ paddingBottom: '20px' }}>
            <Link to="/s1/videos">
                <div className="card">
                    <img
                        src={thumbnails.medium.url}
                        className="rounded-circle card-imp-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{snippet.title}</h5>
                        <p className="card-text">Total Videos: {contentDeatils.totalItemCount}</p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Subscription;