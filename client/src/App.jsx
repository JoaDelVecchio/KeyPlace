import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import { RequireAuth, Layout } from "./routes/layout/layout"; // Ensure this is implemented correctly

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Main Layout for the app
      children: [
        {
          path: "/",
          element: <HomePage />, // Home Page
        },
        {
          path: "/list",
          element: <ListPage />, // List Page
        },
        {
          path: "/:id",
          element: <SinglePage />, // Single Page with dynamic ID
        },
        {
          path: "/login",
          element: <Login />, // Login Page
        },
        {
          path: "/register",
          element: <Register />, // Register Page
        },
        {
          element: <RequireAuth />, // Wrapper for protected routes
          children: [
            {
              path: "/profile",
              element: <ProfilePage />, // Profile Page (protected)
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
