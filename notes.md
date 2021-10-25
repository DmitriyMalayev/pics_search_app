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
