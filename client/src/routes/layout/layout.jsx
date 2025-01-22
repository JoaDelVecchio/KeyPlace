import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Section */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Content Section */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};
export const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Section */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Content Section */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};
