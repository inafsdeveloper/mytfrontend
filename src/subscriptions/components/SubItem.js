import React from "react";
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Avatar from '../../shared/components/UIElements/Avatar';
import './SubItem.css'

const SubItem = props => {

    const snippet = props.item.snippet;
    const thumbnails = snippet.thumbnails;
    const contentDetails = props.item.contentDetails;

    const subsitem = {
        title: snippet.title,
        image: thumbnails.medium.url
    };


    return (
        <li className="sub-item">
            <Card className="sub-item__content">
                <Link to="/u1/s1/videos">
                    <div className="sub-item__image">
                        <Avatar image={subsitem.image} />
                    </div>
                    {/* <div className="sub-item__info">
                        <h2>{subsitem.title}</h2>
                        <h3>
                            Total Videos : {contentDetails.totalItemCount}
                        </h3>
                        <h3>
                            New Videos : {contentDetails.newItemCount}
                        </h3>
                    </div> */}
                </Link>
            </Card>
        </li>
    );
};

export default SubItem;
