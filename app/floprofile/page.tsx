"use client";

import { Profile } from "./components/Profile";
import { SocialMedia } from "./components/SocialMedia";

const FloProfilePage = () => {
  return (
    <div className="py-8 bg-[url('/cloudy.svg')]">
      <div className="container bg-white mx-auto rounded-lg p-8 bg-opacity-50">
        <h1
          className="text-4xl font-bold text-center my-8"
          style={{
            color: "#074E6A",
          }}
        >
          FloProfile
        </h1>
        <Profile />
      </div>
      <SocialMedia />
    </div>
  );
};

export default FloProfilePage;
