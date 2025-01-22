import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import apiBaseUrl from "../config/apiUrl";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);

      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");

      const newUser = { username, password, email };

      const response = await fetch(`${apiBaseUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      navigate("/login");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-6"
        >
          <h1 className="text-2xl font-semibold text-gray-800">
            Create an Account
          </h1>
          <input
            name="username"
            required
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            required
            type="text"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            required
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
          {error && <ErrorMessage error={error} />}
          <Link
            to="/login"
            className="block text-center text-sm text-blue-500 hover:underline"
          >
            Do you have an account?
          </Link>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-blue-100">
        <img
          src="/bg.png"
          alt="Background"
          className="w-3/4 h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default Register;
