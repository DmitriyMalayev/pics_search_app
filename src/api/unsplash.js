import axios from "axios";

//Creating an instance of the axios client with default properties
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID h0oHMJ3efbKgGYBTJ7KIULU9EOR4mrjbGRTC7uhlqng",
  },
});
