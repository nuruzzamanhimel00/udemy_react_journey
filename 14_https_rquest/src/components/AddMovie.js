import React, { useState, useRef, useContext } from "react";
import AllContext from "../store/all-context.js";

const AddMovie = (props) => {
  const [isShow, setIsShow] = useState(false);
  const title = useRef("");
  const description = useRef("");
  const allCtx = useContext(AllContext);
  const showAndHideHandler = () => {
    setIsShow(!isShow);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(title, description);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/post-create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${allCtx.access_token}`,
        },
        body: JSON.stringify({
          title: title.current.value,
          description: description.current.value,
        }),
      });
      // console.log(response);
      if (response.status !== 200) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();
      if (data.status === "success") {
        title.current.value = ''
        description.current.value = ''
        setIsShow(!isShow);
        allCtx.addAllMovies(data.data);
      }
      // console.log("add moive response", data);

      // console.log("data", data);
    } catch (error) {
      console.log("An error occurred:", error.message);
    }
  };
  return (
    <>
      <div>
        <button
          type="button"
          className={isShow ? "btn btn-success" : "btn btn-danger"}
          onClick={showAndHideHandler}
        >
          {isShow ? "Show" : "Hide"}
        </button>
      </div>
      {isShow && (
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="title"
              name="title"
              className="form-control"
              ref={title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>

            <textarea
              name="description"
              className="form-control"
              ref={description}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default AddMovie;
