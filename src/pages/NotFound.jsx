import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#242424]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-300">Page not found.</h1>
        <p className="text-lg text-gray-300 mt-4 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="bg-gray-300 text-black px-4 py-2 rounded-lg">
          Continue to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
