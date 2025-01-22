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
    <div className="relative flex flex-col items-center">
      {/* Full-Screen Slider */}
      {imageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          {/* Arrow Left */}
          <button
            onClick={() => changeSlide("left")}
            className="absolute left-8 bg-white rounded-full p-2 hover:bg-gray-100 shadow-md"
          >
            <img src="/arrow.png" alt="Previous" className="w-6 h-6" />
          </button>

          {/* Main Image */}
          <div className="max-w-4xl max-h-[80vh]">
            <img
              src={images[imageIndex]}
              alt={`Slide ${imageIndex}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Arrow Right */}
          <button
            onClick={() => changeSlide("right")}
            className="absolute right-8 bg-white rounded-full p-2 hover:bg-gray-100 shadow-md"
          >
            <img src="/arrow.png" alt="Next" className="w-6 h-6" />
          </button>

          {/* Close Button */}
          <button
            onClick={() => setImageIndex(null)}
            className="absolute top-4 right-4 text-white text-2xl font-bold bg-red-600 rounded-full p-2 hover:bg-red-700"
          >
            ×
          </button>
        </div>
      )}

      {/* Big Image */}
      <div
        className="cursor-pointer border border-gray-200 rounded-lg shadow-lg overflow-hidden"
        onClick={() => setImageIndex(0)}
      >
        <img
          src={images[0]}
          alt="Main"
          className="w-full h-64 object-cover hover:opacity-90 transition"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            onClick={() => setImageIndex(index + 1)}
            className="cursor-pointer border border-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-20 h-20 object-cover hover:opacity-75 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
