import { useState } from "react";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Full-Screen Slider */}
      {imageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-between bg-black bg-opacity-90 z-50">
          {/* Left Arrow */}
          <div
            className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600"
            onClick={() => changeSlide("left")}
          >
            <img src="/arrow.png" alt="Left Arrow" className="w-6" />
          </div>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={images[imageIndex]}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Right Arrow */}
          <div
            className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600"
            onClick={() => changeSlide("right")}
          >
            <img
              src="/arrow.png"
              alt="Right Arrow"
              className="w-6 rotate-180"
            />
          </div>

          {/* Close Button */}
          <div
            className="absolute top-4 right-4 text-white text-xl font-bold cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}

      {/* Main Image */}
      <div className="w-full cursor-pointer">
        <img
          src={images[0]}
          alt="Main"
          className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition"
          onClick={() => setImageIndex(0)}
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-4 overflow-x-auto">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            key={index}
            className="w-24 h-16 object-cover rounded-lg cursor-pointer hover:shadow-md transition"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
