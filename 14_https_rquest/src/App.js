import React, { useState, useEffect, useCallback, useContext } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
// import axios from "axios";
import moment from "moment";
import AddMovie from "./components/AddMovie.js";
import TokenGenerate from "./components/TokenGenerate.js";
import AddContextProvider from "./store/AddContextProvider.js";
import AllContext from "./store/all-context.js";

function App() {
  const allCtx = useContext(AllContext);
  const [moviesApi, setMoviesApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [accessToken, setAccessToken] = useState("");

  const setAccessTokenHandler = (access_token) => {
    setAccessToken(access_token);
    console.log("access_token hander", access_token);
  };

  // const fetchMovieHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError("");
  //   //errors

  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/get-all-post");
  //     // console.log(response);
  //     if (response.status !== 200) {
  //       throw new Error("Something is wrong");
  //     }
  //     const data = await response.json();

  //     data.data.forEach((d) => {
  //       d.releaseDate = moment(d.created_at).format("MMM Do YY");
  //       d.openingText = d.description;
  //       // console.log(d);
  //     });
  //     console.log("fetch all moviews", data.data);
  //     allCtx.addAllMovies([...data.data]);
  //     setMoviesApi([...data.data]);
  //     setIsLoading(false);
  //     // console.log(data);
  //   } catch (error) {
  //     setError(error.message);
  //     // Code to handle the error
  //     console.log("An error occurred:", error.message);
  //   } finally {
  //     // Optional finally block
  //     // Code here will always execute regardless of whether an error occurred or not
  //   }

  //   //aync await
  //   // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   // const data = await response.json();
  //   // data.forEach((d) => {
  //   //   d.releaseDate = moment().format("MMM Do YY");
  //   //   d.openingText = d.body;
  //   // });
  //   // setMoviesApi([...data]);
  //   // setIsLoading(false);
  //   // console.log(data);
  //   //fetch:-
  //   // fetch("https://jsonplaceholder.typicode.com/posts")
  //   //   .then((response) => {
  //   //     return response.json();
  //   //   })
  //   //   .then((data) => {
  //   // data.forEach((d) => {
  //   //   d.releaseDate = moment().format("MMM Do YY");
  //   //   d.openingText = d.body;
  //   // });
  //   // setMoviesApi([...data]);
  //   // console.log(data);
  //   //   });
  //   //axios:-
  //   // axios
  //   //   .get("https://jsonplaceholder.typicode.com/posts")
  //   //   .then((response) => {
  //   //     // handle success
  //   //     //current date set in array object
  //   // response.data.forEach((d) => {
  //   //   d.releaseDate = moment().format("MMM Do YY");
  //   //   d.openingText = d.body;
  //   // });
  //   //     setMoviesApi([...response.data]);
  //   //     console.log(response);
  //   //   })
  //   //   .catch((error) => {
  //   //     // handle error
  //   //     console.log(error);
  //   //   })
  //   //   .finally(() => {
  //   //     // always executed
  //   //   });
  // }, []);

  // useEffect(() => {
  //   console.log("user effert");
  //   fetchMovieHandler();
  // }, [fetchMovieHandler]);

  return (
    <AddContextProvider
      accessTokenSet={setAccessTokenHandler}
      moviesApi={moviesApi}
    >
      {!accessToken && (
        <section>
          <TokenGenerate />
        </section>
      )}

      {accessToken && (
        <section>
          <AddMovie />
        </section>
      )}

      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        {<MoviesList movies={moviesApi} />}
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </section>
    </AddContextProvider>
  );
}

export default App;
