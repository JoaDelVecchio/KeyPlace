import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <form className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome back</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">
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
