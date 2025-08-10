// src/components/UserProfile.jsx
import React from "react";

function UserProfile() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="rounded-full mx-auto w-24 h-24 md:w-36 md:h-36"
      />
      <h1 className="mt-4 text-lg md:text-xl font-bold">John Doe</h1>
      <p className="mt-2 text-sm md:text-base text-gray-600">
        Front-End Developer passionate about building responsive and accessible
        web applications.
      </p>
    </div>
  );
}

export default UserProfile;