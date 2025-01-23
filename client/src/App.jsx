import HomePage from "./routes/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage";
import SinglePage from "./routes/singlePage";
import ProfilePage from "./routes/profilePage";
import Login from "./routes/login";
import Register from "./routes/register";
import { RequireAuth, Layout } from "./routes/layout";
import ProfileUpdatePage from "./routes/profileUpdatePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Main Layout
      element: <Layout />,
      children: [
        {
          path: "/", // Public Route
          element: <HomePage />,
        },
        {
          path: "/list", // Public Route
          element: <ListPage />,
        },
        {
          path: "/:id", // Public Route with Dynamic ID
          element: <SinglePage />,
        },
        {
          path: "/login", // Login Page
          element: <Login />,
        },
        {
          path: "/register", // Register Page
          element: <Register />,
        },
      ],
    },
    {
      // Protected Routes Wrapper
      element: <RequireAuth />,
      children: [
        {
          path: "/profile", // Profile Page (protected)
          element: <ProfilePage />,
        },
        {
          path: "/profile/update", // Profile Update Page (protected)
          element: <ProfileUpdatePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
