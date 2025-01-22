function ProfileUpdatePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Update Profile
          </h1>

          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Update
          </button>
        </form>
      </div>

      {/* Side Container */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-blue-100">
        <img
          src=""
          alt="Avatar"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
