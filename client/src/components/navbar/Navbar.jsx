import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-lg font-semibold">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span>KeyPlace</span>
        </a>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="/" className="hover:text-black transition">
            Home
          </a>
          <a href="/" className="hover:text-black transition">
            About
          </a>
          <a href="/" className="hover:text-black transition">
            Contact
          </a>
          <a href="/" className="hover:text-black transition">
            Agents
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* User Section */}
        {user ? (
          <div className="flex items-center gap-4">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-700">John Doe</span>
            <Link
              to="/profile"
              className="relative px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              <div className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full">
                3
              </div>
              Profile
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-700 hover:text-black transition">
              Sign in
            </a>
            <a
              href="/"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              Sign up
            </a>
          </div>
        )}

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="block md:hidden"
        >
          <img src="/menu.png" alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-6 text-gray-700">
          <a href="/" className="hover:text-black transition">
            Home
          </a>
          <a href="/" className="hover:text-black transition">
            About
          </a>
          <a href="/" className="hover:text-black transition">
            Contact
          </a>
          <a href="/" className="hover:text-black transition">
            Agents
          </a>
          {!user && (
            <>
              <a href="/" className="hover:text-black transition">
                Sign in
              </a>
              <a
                href="/"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Sign up
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
