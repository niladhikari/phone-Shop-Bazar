import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="h-screen grid top-32 justify-center items-center">
        Oops Data Not Found....
        <Link to={"/"}>
          <button className="p-3 bg-blue-500 text-white font-semibold">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
