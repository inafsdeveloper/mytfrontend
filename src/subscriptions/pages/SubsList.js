import React from "react";
import SubItem from '../components/SubItem';
import './SubsList.css';

const DATA = require('../../shared/data/subs-list.json');

const Subs = props => {
    return (
        <React.Fragment>
            <div className="center">
                <input placeholder="Search.." id="input" name="text" type="text" />
            </div>
            <div>
                <ul className="subs-list">
                    {DATA.items.map(item => (
                        <SubItem
                            item={item}
                        />
                    ))}
                </ul>
            </div>
        </React.Fragment>

    );
};

export default Subs;