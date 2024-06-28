import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p v-if={error}>
              <i>{error.status} <br></br>{ error.error.message}</i>
      </p>
    </div>
  );
}