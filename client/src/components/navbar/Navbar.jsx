import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <img src="/logo.png" alt="Logo" className="w-16 h-16" />
          <span>KeyPlace</span>
        </Link>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-black transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-black transition">
            Contact
          </Link>
          <Link to="/agents" className="hover:text-black transition">
            Agents
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* User Section */}
        {currentUser?.username ? (
          <div className="flex items-center gap-4">
            <img
              src={
                currentUser?.avatar ||
                "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              }
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-700">{currentUser?.username}</span>
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
            <Link
              to="/login"
              className="text-gray-700 hover:text-black transition"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              Sign up
            </Link>
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
      <div>
        {/* Backdrop */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-full md:w-2/3 h-full bg-white shadow-lg transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
          aria-hidden={!open}
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="self-end p-4 text-gray-700 hover:text-black transition"
              aria-label="Close menu"
            >
              &#x2715;
            </button>

            {/* Menu Links */}
            <div className="flex flex-col items-start p-6 space-y-6 text-gray-700">
              <Link
                to="/"
                className="text-lg font-medium hover:text-black transition"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-lg font-medium hover:text-black transition"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-lg font-medium hover:text-black transition"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/agents"
                className="text-lg font-medium hover:text-black transition"
                onClick={() => setOpen(false)}
              >
                Agents
              </Link>
              {!currentUser && (
                <>
                  <Link
                    to="/login"
                    className="text-lg font-medium hover:text-black transition"
                    onClick={() => setOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
