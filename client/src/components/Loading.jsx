const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="relative w-16 h-16 animate-spin">
          <div className="absolute w-full h-full border-4 border-t-transparent border-white rounded-full"></div>
        </div>
        {/* Loading Text */}
        <h1 className="text-xl font-semibold tracking-wider animate-pulse">
          Loading...
        </h1>
      </div>
    </div>
  );
};

export default Loading;
