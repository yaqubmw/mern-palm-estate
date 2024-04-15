import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-4 max-w-lg mx-auto text-sm">
      <h1 className="text-2xl font-semibold text-center text-emerald-700 my-7">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="rounded-lg p-3 border focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="rounded-lg p-3 border focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="rounded-lg p-3 border focus:outline-none"
        />
        <button className="bg-emerald-700 text-white p-3 rounded-lg font-medium uppercase hover:bg-emerald-800 disabled:opacity-70 transition-colors duration-300">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-6">
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span className="text-emerald-700 hover:text-emerald-900 transition-colors duration-300 underline">
            Sign In
          </span>
        </Link>
      </div>
    </div>
  );
}
