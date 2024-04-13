import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow-md bg-green-200">
      <div className="flex justify-between items-center max-w-6xl m-auto p-3">
        <Link to={"/"}>
          <h1 className="flex flex-wrap font-bold text-sm sm:text-xl">
            <span className="text-green-500">Palm</span>
            <span className="text-emerald-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-green-100 rounded flex items-center p-1 gap-1">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-xs sm:text-sm focus:outline-none w-32 sm:w-64"
          />
          <FaSearch className="text-emerald-600" />
        </form>
        <ul className="flex gap-4 text-sm">
          <Link to={"/"}>
            <li className="py-0 sm:py-1 border-b-2 border-hidden hover:border-solid border-b-green-700 hidden sm:inline text-emerald-700 font-medium transition-all">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="py-0 sm:py-1 border-b-2 border-hidden hover:border-solid border-b-green-700 hidden sm:inline text-emerald-700 font-medium transition-all">
              About
            </li>
          </Link>
          <Link to={"/signin"}>
            <li className="py-0 sm:py-1 inline border-b-2 border-hidden hover:border-solid border-b-green-700 text-emerald-700 font-medium transition-all">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
