import React from "react";
import Myimage from "../assets/myimage.jpg";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-white  ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer.
          </h2>
          <p className="py-4 max-w-md text-pink-900">
            I have of experience building and desgining Fronten. Currently, I
            love to work on web application using technologies like React JS,
            Tailwind,Material UI,Bootstrap and Firebase.
          </p>
        </div>
        <div>
          <img
            src={Myimage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
