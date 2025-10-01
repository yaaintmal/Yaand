import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img src="/404.gif" alt="404 Not Found" className="w-64 h-64 mb-6" />
        <h1 className="text-4xl font-bold text-error mb-2 text-transparent bg-gradient-to-br from-primary via-second to-info bg-clip-text">
          Page Not Found
        </h1>
        <p className="text-right text-info text-lg mb-6 uppercase font-light">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
      <div className="breadcrumbs text-sm m-4">
        <ul>
          <li>
            <a>root</a>
          </li>
          <li>
            <a>error</a>
          </li>
          <li>404</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
