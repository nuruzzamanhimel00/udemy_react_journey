import React from "react";

const AllContext = React.createContext({
  addAccessTokenCheck: (access_token) => {},
  access_token: "",
  allMovies: [],
  addAllMovies: (allMovies) => {},
});

export default AllContext;
