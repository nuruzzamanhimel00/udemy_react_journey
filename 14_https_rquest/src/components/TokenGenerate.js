import React, { useContext } from "react";
import AllContext from "../store/all-context.js";
const TokenGenerate = () => {
  const allCtx = useContext(AllContext);
  const tokenGenerateHandler = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          email: "admin@app.com",
          password: "12345678",
        }),
      });
      // console.log(response);
      if (response.status !== 200) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();
      allCtx.addAccessTokenCheck(data.access_token);

      // console.log("data", data);
    } catch (error) {
      console.log("An error occurred:", error.message);
    }
  };
  return (
    <>
      <div>
        <button type="button" onClick={tokenGenerateHandler}>
          Token Generate
        </button>
      </div>
    </>
  );
};

export default TokenGenerate;
