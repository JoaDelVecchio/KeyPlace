import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../context/AuthContext";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import apiBaseUrl from "../config/apiUrl";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser, updateUser } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    try {
      setError(null);
      setLoading(true);
      e.preventDefault();
      const formData = new FormData(e.target);
      const username = formData.get("username");
      const password = formData.get("password");

      if (!username || !password) throw new Error("Missing Fields");

      const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const user = await response.json();
      console.log(user);
      updateUser(user);
      console.log("Logged In Successfully");
      navigate(`/${user.id}`);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loading />;
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-semibold text-gray-800">Welcome back</h1>
          <input
            name="username"
            required
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            required
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <ErrorMessage error={error} />}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Login
          </button>
          <Link
            to="/register"
            className="block text-center text-sm text-blue-500 hover:underline"
          >
            {"Don't"} have an account?
          </Link>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex flex-1">
        <img
          src="/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Login;
