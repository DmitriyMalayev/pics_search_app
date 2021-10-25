import React from "react";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value)
  // }

  state = { term: "" };

  render() {
    return (
      <div className="ui sigment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
