import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
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
}

export default Layout;
