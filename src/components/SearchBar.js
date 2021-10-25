import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui sigment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

//We're using a class based component because we plan to utilize state
