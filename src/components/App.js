import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import Image from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  // whenever we expect a state property to eventually contain an Array that's what we default it to.

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results }); //This will trigger rerender
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
