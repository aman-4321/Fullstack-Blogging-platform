import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="border-b border-gray-200 flex justify-between px-10 py-4 bg-white shadow-md">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center cursor-pointer font-bold text-3xl text-gray-800"
      >
        Medium
      </Link>
      <div className="flex items-center">
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            New
          </button>
        </Link>
        <Avatar size={"big"} name="Aman" />
      </div>
    </div>
  );
};
