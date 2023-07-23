import React from "react";
import './Search.css';

const Search = props => {
    return (
        <div class="row  justify-content-left align-items-center" style={{paddingTop: '20px', paddingBottom: '20px '}}>
            <div class="col">
                <div class="search">
                    <input type="text" class="form-control" placeholder="Search your subscriptions..." 
                        value={props.inputValue}
                        onChange={props.handleInputChange}
                    />
                    <button class="btn btn-primary" onClick={props.handleSearch}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;