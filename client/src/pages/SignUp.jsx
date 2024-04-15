import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto text-sm">
      <h1 className="text-2xl font-semibold text-center text-emerald-700 my-7">
        Sign Up
      </h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="rounded-lg p-3 border focus:outline-none"
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="rounded-lg p-3 border focus:outline-none"
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="rounded-lg p-3 border focus:outline-none"
          onChange={changeHandler}
        />
        <button
          disabled={loading}
          className="bg-emerald-700 text-white p-3 rounded-lg font-medium uppercase hover:bg-emerald-800 disabled:opacity-70 transition-colors duration-300"
        >
          {loading ? "Loading..." : "Sign Up"}
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
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
