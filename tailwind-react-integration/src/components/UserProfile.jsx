// src/components/UserProfile.jsx
import React from "react";

function UserProfile() {
  return (
    <div className="bg-gray-100 my-20">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className="rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 transform hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <h1 className="mt-4 my-4 text-lg md:text-xl font-bold text-blue-800 hover:text-blue-500 transition-colors duration-300 ease-in-out">
          John Doe
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          Front-End Developer passionate about building responsive and accessible
          web applications.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;