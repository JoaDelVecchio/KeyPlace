import { useContext, useEffect, useState } from "react";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiBaseUrl from "../../config/apiUrl";

function ProfilePage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { currentUser, updateUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/auth/logout`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      console.log(data.message);

      updateUser(null);
      navigate("/");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Details Section */}
      <div className="flex-1 p-8 space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">
              User Information
            </h1>
            <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
              Update Profile
            </button>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-4">
              <span className="font-medium">Avatar:</span>
              <img
                src={
                  currentUser?.avatar ||
                  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                }
                alt="Avatar"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p>
              <span className="font-medium">Username:</span>{" "}
              <b>{currentUser?.username}</b>
            </p>
            <p>
              <span className="font-medium">E-mail:</span>{" "}
              <b>{currentUser?.email}</b>
            </p>

            <button
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        {/* My List Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">My List</h1>
            <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
              Create New Post
            </button>
          </div>
          <List />
        </div>

        {/* Saved List Section */}
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-800">Saved List</h1>
          <List />
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 p-8 bg-white shadow-lg">
        <Chat />
      </div>
    </div>
  );
}

export default ProfilePage;
