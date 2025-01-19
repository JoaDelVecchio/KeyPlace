import { useState } from "react";

function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white shadow-md">
        <h1 className="text-xl font-semibold text-gray-800">Messages</h1>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <span className="block font-medium text-gray-700">John Doe</span>
              <p className="text-sm text-gray-500 truncate">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Box */}
      {chat && (
        <div className="w-full h-96 bg-white shadow-lg flex flex-col">
          {/* Chat Header */}
          <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
            <div className="flex items-center gap-4">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-gray-800 font-medium">John Doe</span>
            </div>
            <button
              onClick={() => setChat(false)}
              className="text-gray-500 hover:text-red-500 transition"
            >
              X
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className={`max-w-sm p-3 rounded-lg ${
                  index % 2 === 0
                    ? "bg-gray-100 self-start"
                    : "bg-blue-100 self-end text-right"
                }`}
              >
                <p className="text-sm text-gray-700">
                  Lorem ipsum dolor sit amet
                </p>
                <span className="text-xs text-gray-500 block mt-2">
                  1 hour ago
                </span>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex items-center border-t p-4 bg-gray-100">
            <textarea
              placeholder="Type a message..."
              className="flex-1 p-3 border rounded-lg resize-none focus:outline-none focus:ring focus:ring-gray-300"
            ></textarea>
            <button className="ml-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
