import React, { useState, useEffect, useCallback } from "react";
import AllContext from "./all-context.js";
import moment from "moment";

const AddContextProvider = (props) => {
  const [accessToken, setAccessToken] = useState("");
  const [allMoviewList, setAllMoviewList] = useState([]);

  const addAccessTokenCheckHandler = (access_token) => {
    setAccessToken(access_token);
    props.accessTokenSet(access_token);
    // console.log("access_token", access_token);
  };

  const addAllMoviesHander = (movies) => {
    // console.log('movies',movies)

      let movies_data = {
        ...movies
      }
      movies_data.releaseDate = moment(movies_data.created_at).format("MMM Do YY")
      movies_data.openingText = movies_data.description;
      console.log('result',movies_data)
      setAllMoviewList((prevMovies) => [movies_data,...prevMovies, ]);
    
    
  };

  const fetchMovieHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError("");
    //errors

    try {
      const response = await fetch("http://127.0.0.1:8000/api/get-all-post");
      // console.log(response);
      if (response.status !== 200) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();

      data.data.forEach((d) => {
        d.releaseDate = moment(d.created_at).format("MMM Do YY");
        d.openingText = d.description;
        // console.log(d);
      });
      console.log("fetch all moviews", data.data);

      setAllMoviewList([...data.data]);
      // setIsLoading(false);
      // console.log(data);
    } catch (error) {
      // setError(error.message);
      // Code to handle the error
      console.log("An error occurred:", error.message);
    } finally {
      // Optional finally block
      // Code here will always execute regardless of whether an error occurred or not
    }

    //aync await
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await response.json();
    // data.forEach((d) => {
    //   d.releaseDate = moment().format("MMM Do YY");
    //   d.openingText = d.body;
    // });
    // setMoviesApi([...data]);
    // setIsLoading(false);
    // console.log(data);
    //fetch:-
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    // data.forEach((d) => {
    //   d.releaseDate = moment().format("MMM Do YY");
    //   d.openingText = d.body;
    // });
    // setMoviesApi([...data]);
    // console.log(data);
    //   });
    //axios:-
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     // handle success
    //     //current date set in array object
    // response.data.forEach((d) => {
    //   d.releaseDate = moment().format("MMM Do YY");
    //   d.openingText = d.body;
    // });
    //     setMoviesApi([...response.data]);
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     // always executed
    //   });
  }, []);

  useEffect(() => {
    console.log("user effert");
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  const AllContextValue = {
    addAccessTokenCheck: addAccessTokenCheckHandler,
    access_token: accessToken,
    allMovies: [...allMoviewList],
    addAllMovies: addAllMoviesHander,
    fetchMovieRequest: fetchMovieHandler,
  };

  return (
    <AllContext.Provider value={AllContextValue}>
      {props.children}
    </AllContext.Provider>
  );
};

export default AddContextProvider;
