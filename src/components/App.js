import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  // whenever we expect a state property to eventually contain an Array that's what we default it to.

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID h0oHMJ3efbKgGYBTJ7KIULU9EOR4mrjbGRTC7uhlqng",
      },
    });
    this.setState({ images: response.data.results }); //This will trigger rerender
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found
      </div>
    );
  }
}

export default App;
