import React from "react";

const Search = props => {
    return (
        <div class="input-group">
            <div class="form-outline">
                <input type="search" id="form1" class="form-control" />
                <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary" onClick={props.handleSearch}>
                <i class="fas fa-search"></i>
            </button>
        </div>
    );
};

export default Search;