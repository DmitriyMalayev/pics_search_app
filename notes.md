# App Challenges

How to get a search term from the user?
How to use the search term to make a request to an outside API and fetch data?
How to take the fetched images and show them on the screen in a list format.

# Component Hierarchy

App Component
SearchBar
ImageList

We're using a class based component because we plan to utilize state
{this.onInputChange} We don't add () because we want it to be invoked in the future and not every time a render occurs.
We do not put on a set of parantheses whenever we pass a callback function to an event handler.

# Special Property Names

`onClick`
User clicks on something
`onChange`
User changes text in an input
`onSubmit`
User submits a form

```js

  render() {
    return (
      <div className="ui sigment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />  Additional method needed
            <input type="text" onChange={(event)=> console.log(event.target.value)} />   SAME THING Uncontrolled Form Element
          </div>
        </form>
      </div>
    );
  }
}


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
              value={this.state.termw}
              onChange={(e) => this.setState({ term: e.target.value })}  //Controlled
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
```

# Controlled Form Element vs. Uncontrolled Form Element

`Controlled Element Flow`
User types in input
Callback gets invoked
We call setState with the new value
Component becomes rerendered
Input is told what it's value is (coming from state)
We take the value from this.state.term and assign it to the value of input

`What is "this" used for inside of a class?`
this is a reference back to the class itself

`How is the value of "this" determined in a function?`
Look where it's called and to the left of the dot

# Props

`Passing information from the parent component down to the child component`
App
SearchBar
ImageList

# Class Based Component Props

```js
this.props.onSubmit();
//Whenever we are in a class based component we use this.props
```

`React`
It's not the job of the React library to make a request to unsplash API
React is only about showing content to our users and handling user interaction
`AJAX Client`
To make an AJAX Request we have separate code
`Axios`
3rd party package
Needs to be installed via npm
Offers more features
First argument is where we want to send the request to
Second argument is an object containing our custom parameters
`fetch`
function built into modern browsers

# Flow Of Our App

Component renders itself one time with no list of images
onSearchSubmit method is called
A request is made to unsplash
wait
A request is completed
Set image data on state of App Component
We use setState and set our images as state for our App Component
The App Component rerenders and shows images

```js
class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID h0oHMJ3efbKgGYBTJ7KIULU9EOR4mrjbGRTC7uhlqng",
        },
      })
      .then((respose) => {
        console.log(respose.data.results);
        //The arrow function will run in the future. It will be invoked with the data returned from unsplash api.
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
```

`async`
By putting this keyword in front of our function allows us to use async await syntax

`await`
We put an await keyword in front of our get request

`map function review`

```js
const numbers = [0, 1, 2, 3, 4];

let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  newNumbers.push(numbers[i] * 10);
}

numbers; //original set
newNumbers; //original set * 10

numbers; //original set
numbers.map((num) => num * 10); //returns a new array
numbers.map((num) => <div> num * 10 </div>); //returns a new array
```

```js
import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;


//Key goes into root of the element
import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <div key={image.id}>
        <img src={image.urls.regular} />
      </div>
    );
  });
  return <div>{images}</div>;
};

export default ImageList;


//Destructuring
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img alt={image.description} key={image.id} src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;


const ImageList = (props) => {
  const images = props.images.map(({description, id, urls}) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
```

`grid-template-columns `
specifies, as a space-separated track list, the line names and track sizing functions of the grid.
`minmax`
minimum 250px wide
maximum 1fr (for every column we create we want it to be equally sized)



# Image Card Component Flow

We let the ImageCard component render itself and it's image
Then, we reach into the DOM and determine the height of the image
Next, we set the image height on state to get the component to rerender
When rerendering, we assign a "grid-row-end" to make sure the image takes up the appropriate space without overlapping.


`Determining Height of an image in Vanilla JavaScript`
We do not use querySelector when working with React. We use the Ref System.  
```js
document.querySelector("img").clientHeight 
```


`React Refs System (short for Reference System)`
Gives access to a single DOM element
We create refs in the contructor, assign them to instance variables, and then pass to a particular JSX element as props
They do not have to be linked to state


# Notes
```js
import React from "react";    //App.js
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
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

/*
state = { images: [] };
  whenever we expect a state property to eventually contain an Array that's what we default it to.

this.setState({ images: response.data.results });
  This will trigger rerender
*/




import React from "react";

class ImageCard extends React.Component {   //ImageCard.js
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
    // Create a reference and assign it to the instance variable
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  // Arrow function used because we want to bind this.
  // Retrieving the real height after loading in the browser.
  // 10 refers to row height rounded up to the next row.

  render() {
    const { description, urls } = this.props.image; //destructuring
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

```


