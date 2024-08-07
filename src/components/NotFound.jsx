import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oh...No!</h1>
      <p>
        We can't find the page you're looking for. Please make sure you've
        entered the correct URL and try again.
      </p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
export default NotFound;
