import { Link, useRouteError } from "react-router-dom";
//import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div>
        <h3>Ohh! page notfound</h3>
        <p>we can't see to find the page you are looking for</p>
        <Link to='/dashboard'>Back Home</Link>
      </div>
    );
  }
  return (
    <div>
      <h3>something went wrong</h3>
    </div>
  );
};

export default Error;
