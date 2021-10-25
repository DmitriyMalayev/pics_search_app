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
