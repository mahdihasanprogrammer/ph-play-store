import React from 'react';

const NotFound = () => {
    return (
<div>
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6">
      <div className="text-center max-w-xl">
        {/* 404 */}
        <h1 className="text-7xl md:text-9xl font-extrabold bg-linear-to-r from-purple-400 via-white to-gray-200 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-200 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-5 py-2 rounded-xl bg-white text-black font-medium shadow-lg hover:scale-105 transition"
          >
            Go Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-xl border border-white font-medium hover:bg-white hover:text-black transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NotFound;